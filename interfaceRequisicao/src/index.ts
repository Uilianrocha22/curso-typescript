// 6. Vamos começar criando as interfaces que vamos utilizar nas funções:

// Obs. Repare que temos a propriedade "message" como opcional, pois ela só estará presente se o usuário passado não seja encontrado, e nesse caso já poderemos validar a resposta.

interface GithubUserResponse {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
  message?: "Not Found";
}

interface GithubRepoResponse {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

// Agora vamos criar nossas funções, começando pela requisição do usuário:

// Obs.: Criamos também a variável users globalmente para que ela fique disponível em todas as funções e no navegador

// Obs².: Os alerts servem apenas para termos um retorno visual do funcionamento e perceber as vantagens do *autocomplete*, normalmente poderíamos fazer a função retornar os resultados

// Obs.: Repare como a interface que criamos nos ajuda a manipular com mais facilidade a resposta da requisição. Normalmente o VS Code não teria nenhuma informação sobre a resposta retornada.

const users: GithubUserResponse[] = [];

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user: GithubUserResponse = await response.json();

  if (user.message) {
    alert(`Usúario não encontrado!`);
  } else {
    users.push(user);

    alert(
      `O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id}` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}` +
        `\nUrl do repositório: ${user.repos_url}`
    );
  }
}

// Agora a função de detalhar um usuário específico:

async function showUser(username: string) {
  const user = users.find((user) => user.login === username);

  if (typeof user === "undefined") {
    alert(`Usuário não encontrado!`);
  } else {
    const response = await fetch(user.repos_url);
    const reposit: GithubRepoResponse[] = await response.json();

    let message =
      `Id: ${user.id}\n` +
      `\nLogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}\n`;

    reposit.forEach((repos) => {
      message +=
        `\nNome: ${repos.name}` +
        `\nDescrição: ${repos.description}` +
        `\nEstrelas: ${repos.stargazers_count}` +
        `\nÉ um fork: ${repos.fork ? "Sim" : "Não"}\n`;
    });
    alert(message);
    console.log(message);
  }
}
