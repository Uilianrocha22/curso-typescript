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

    console.log(
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

    console.log(message);
  }
}

// A função de mostrar todos os usuários salvos:

function showAllUsers() {
  let message = `Usuários:\n`;

  users.forEach((user) => {
    message += `\n- ${user.login}`;
  });

  console.log(message);
}

// A função de somar o número de repositórios públicos:

function showReposTotal() {
  const reposTotal = users.reduce(
    (accumulator, user) => accumulator + user.public_repos,
    0
  );

  console.log(
    `O grupo possui um total de ${reposTotal} repositórios públicos!`
  );
}

// A função de mostrar todos os usuários salvos:

function showTopFive() {
  const topFive = users
    .slice()
    .sort(
      (currentUser, nextUser) =>
        nextUser.public_repos - currentUser.public_repos
    )
    .slice(0, 5);

  let message = `Top 5 usuários com mais repositórios públicos:\n`;

  topFive.forEach((user, index) => {
    message += `\n${index + 1} - ${user.login}: ${
      user.public_repos
    } repositórios.`;
  });

  console.log(message);
}

// Opcionalmente podemos declarar uma função para executar todas as outras para testar:

async function main() {
  await fetchUser("isaacpontes");
  await fetchUser("julianaconde");
  await fetchUser("pcaldass");
  await fetchUser("lucasqueirogaa");
  await fetchUser("frans203");
  await fetchUser("LeDragoX");

  await showUser("isaacpontes");
  await showUser("julianaconde");

  showAllUsers();
  showReposTotal();
  showTopFive();
}
