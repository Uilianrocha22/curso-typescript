const setPilot = async (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = async (targetSpeed, spaceship) => {
    spaceship.speed = targetSpeed;
};
const sendToMission = async (spaceship) => {
    spaceship.inMission = true;
};
const spaceship = {
    name: "",
    pilot: "",
    speed: 0,
    inMission: false,
};
const pilot = "Han Solo";
spaceship.name = "Millennium Falcon";
setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);
console.log(spaceship);
let sum;
(sum.name = "Sol"),
    (sum.age = 4.603 * 10 ** 30),
    (sum.mass = 1.989 * 10 ** 9),
    (sum.planets = []);
// Interfaces com CLASSES
// Classes podem implementar interfaces Nesse caso ela cria o que chamamos de contrato, pois obriga a classe a implementar tudo o que foi definido na interface
class MilkyWayPlanet {
    name;
    mass;
    population;
    satellites;
    constructor(name, mass, population, satellites) {
        (this.name = name),
            (this.mass = mass),
            (this.population = population),
            (this.satellites = satellites);
    }
    createSatellite(name) {
        // ...
    }
}
// tipo literal:
// são tipos representados por conteúdos específicos.
// variáveis const são altomaticamente literais.
// mas variaveis let também pode ser tipadas como literais
let literal;
let pi;
// literal = "hi, world"; === ERROR
// ------------------------------------------
// Union tipes:
// Unions são tipos que unem diferentes possibilidades de tipos
let option;
option = 1;
option = "1";
// option = false === ERROR
let option2;
option2 = "maybe";
let planet;
let homePlanet;
homePlanet = "Urano";
if (homePlanet === "Urano") {
    console.log("Estamos em Urano.");
}
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra.");
    }
}
checkPlanet("Terra");
function greet(callback) {
    const name = prompt("Qual é o seu nome?");
    callback(name);
}
var Planets;
(function (Planets) {
    Planets["MERCURIO"] = "mercurio";
    Planets["VENUS"] = "venus";
    Planets["TERRA"] = "terra";
    Planets["MARTE"] = "marte";
})(Planets || (Planets = {}));
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles["USER"] = "uilian";
})(Roles || (Roles = {}));
console.log(Planets.TERRA);
console.log(Roles.USER);
// Para evitar a tipagem basta colocar um ( ? ) após o parametro
// EX no copilot :
function sendSpaceShip2(spaceship) {
    //.......................
}
sendSpaceShip2({ pilot: "uilian", copilot: "chewbacca" });
sendSpaceShip2({ pilot: "luke" });
//---------------------------------------------------------------------------------
// com o tipo (unknown) você pode atribuir qualquer valor para sua variável
//let input: unknown;
let input;
input = "teste";
input = 5;
input = [];
let text;
text = input;
input = text;
//-----------------------------------------------------------------------------------
function verification(test) {
    if (test) {
    }
    else {
        let check;
        let text = check;
        text = "";
        return check;
    }
}
// Uso do Aliases com type para deixar o codigo mais enxuto:
// criação do Array de planetas e função de adicionar um planeta
const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: [],
    });
    alert(`O planeta ${name} foi registrado com sucesso.`);
}
// Funçaõ para encontrar um planeta:
function findPlanet(name) {
    const planet = planets.find((planet) => planet.name === name);
    return planet ?? false;
}
// Função para atuaçizar um planete:
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
}
//Funções para adicionar satélites:
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adcionado ao planeta ${planet.name}`);
}
//Funções para remover satélites:
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter((satellite) => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
// Funções auxiliares:
// função auxiliar para validar a entrada da propriedade situação.
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = Number(prompt(`Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado `));
        switch (situationInput) {
            case 1:
                situation = "Habitado";
                validSituation = true;
                break;
            case 2:
                situation = "Habitável";
                validSituation = true;
                break;
            case 3:
                situation = "inabitável";
                validSituation = true;
                break;
            case 4:
                situation = "inexplorado";
                validSituation = true;
                break;
            default:
                alert(`Situação inválida!`);
                break;
        }
    }
    return situation;
}
// Função auxiliar para validar o nome do planeta, recebera um callback para lidar com o resultado.
function promptValidPlanet(callback) {
    const planetName = prompt(`Informe o nome do planeta:`);
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
        alert(`Planeta não encontrado! retornando ao menu...`);
    }
}
// Funções auxiliar para opções de menu:
// funçaõ menu para adicionar um planeta, suas coordenadas e sua situação:
function firstMenuOption() {
    const name = prompt(`Informe o nome do planeta:`);
    const coordinateA = Number(prompt(`Informe a primeira coordenada:`));
    const coordinateB = Number(prompt(`Informe a segunda coordenada:`));
    const coordinateC = Number(prompt(`Informe a terceira coordenada:`));
    const coordinateD = Number(prompt(`Informe a quarta coordenada:`));
    // Aqui a nossa função ajuda a ter um código mais organizado
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?\nCoordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})\nSituação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
    else
        alert(`Retornando ao menu.`);
}
// funçoes menu que atualizam o planeta:
function secondMenuOption() {
    promptValidPlanet((planet) => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet((planet) => {
        const satellite = prompt(`Informe o nome do satélite a ser adicionado:`);
        addSatellite(satellite, planet);
    });
}
function fourthMenuOption() {
    promptValidPlanet((planet) => {
        const satellite = prompt(`Informe o nome do satélite a ser removido:`);
        removeSatellite(satellite, planet);
    });
}
function fifthMenuOption() {
    let list = "Planetas:\n";
    planets.forEach((planet) => {
        // Repare que as tuplas são uma forma fácil de permitir a
        // desestruturação com qualquer nome nas variáveis.
        // As variáveis a seguir podem ter qualquer nome pois a
        // tupla segue um padrão fixo.
        const [a, b, c, d] = planet.coordinates;
        list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satellites.length}
    `;
        planet.satellites.forEach((satellite) => {
            list += `    - ${satellite}\n`;
        });
    });
    alert(list);
}
// Menu
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert("Encerrando o sistema...");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
// Um array vai ser usado para salvar as naves de forma mais simplificada
const spaceships = [];
// Funções principais
// Primeiro a função de adicionar uma nave:
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
//  Agora a função de encontrar uma nave:
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => ship.name === name);
    return spaceship;
}
// Função de adicionar um tripulante:
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado à tripulação. Limite atingido.`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado à tripulação da ${spaceship.name}.`);
    }
}
//  Função de enviar em missão:
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão.`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. tripulação insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada para a missaão!`);
    }
}
// Opções do menu
// 1° opção :
function firstMenuOption() {
    const name = prompt(`Qual é o nome da nave a ser registrada?`);
    const pilot = prompt(`Qual é o nome do piloto da ${name}`);
    const crewLimit = Number.parseInt(prompt(`Quantos tripulantes a ${name} suporta? `));
    const confirmation = confirm(`Confirma o registro da nave ${name}?\n
    \nPiloto: ${pilot}
    \nTamanho da tripulação: ${crewLimit}`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
// 2° opção:
function secondMenuOption() {
    const member = prompt(`Qual é o nome do tripulante?`);
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confira a inclussão de ${member} na tripulação da ${spaceship.name}`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
// 3° opção:
function thirdMenuOption() {
    const spaceshipName = prompt(`Qual é o nome da nave a ser enviada?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da ${spaceship.name} na missão ? `);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
// 4° opção
function fourthMenuOption() {
    let list = "Naves registradas:";
    spaceships.forEach((spaceship) => {
        list += `
     
     Nave: ${spaceship.name}
     Piloto: ${spaceship.pilot}
     Em missão: ${spaceship.inMission ? "sim" : "não"}
     Tamanho máximo da tripulação: ${spaceship.crewLimit}
     Tripulantes: ${spaceship.crew.length}  
   `;
        spaceship.crew.forEach((member) => {
            list += `
        -${member}`;
        });
    });
    alert(list);
}
// Menu :
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel principal :\n
     1 - Registrar uma nova nave
     2 - Adicionar membro da tripulação
     3 - Enviar nave em missão
     4 - Listar nave registradas
     5 - Encerrar
     `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert(`Encerrando o sistema...`);
            break;
        default:
            alert(`Opção inválida! Retornando ao painel principal...`);
            break;
    }
}
// 6. Vamos começar criando as interfaces que vamos utilizar nas funções:
// Agora vamos criar nossas funções, começando pela requisição do usuário:
// Obs.: Criamos também a variável users globalmente para que ela fique disponível em todas as funções e no navegador
// Obs².: Os alerts servem apenas para termos um retorno visual do funcionamento e perceber as vantagens do *autocomplete*, normalmente poderíamos fazer a função retornar os resultados
// Obs.: Repare como a interface que criamos nos ajuda a manipular com mais facilidade a resposta da requisição. Normalmente o VS Code não teria nenhuma informação sobre a resposta retornada.
const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.message) {
        alert(`Usúario não encontrado!`);
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}` +
            `\nUrl do repositório: ${user.repos_url}`);
    }
}
// Agora a função de detalhar um usuário específico:
async function showUser(username) {
    const user = users.find((user) => user.login === username);
    if (typeof user === "undefined") {
        alert(`Usuário não encontrado!`);
    }
    else {
        const response = await fetch(user.repos_url);
        const reposit = await response.json();
        let message = `Id: ${user.id}\n` +
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
    const reposTotal = users.reduce((accumulator, user) => accumulator + user.public_repos, 0);
    console.log(`O grupo possui um total de ${reposTotal} repositórios públicos!`);
}
// A função de mostrar todos os usuários salvos:
function showTopFive() {
    const topFive = users
        .slice()
        .sort((currentUser, nextUser) => nextUser.public_repos - currentUser.public_repos)
        .slice(0, 5);
    let message = `Top 5 usuários com mais repositórios públicos:\n`;
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios.`;
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
//  Abaixo possui a interface completa da API do GitHub usada no último:
let repo;
repo.owner.avatar_url;
let repository;
let localUser;
let localRepository;
// Vemos que no autocompletar as propriedades de ambos os objetos aparecem
localRepository.name = "";
localUser.name = "";
function sendSpaceShip(name, capitan) {
    const spaceship = {
        name,
        capitan,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.capitan} foi enviada em uma missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Almentando a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else {
        alert(`Mantendo a velocidade da ${spaceship.name} ...`);
    }
}
const spaceshipName = prompt(`Insira o nome da nave a ser enviada.`);
const spaceshipCapitan = prompt(`Insira o nome do capitão da nave`);
const currentShip = sendSpaceShip(spaceshipName, spaceshipCapitan);
const speed = +prompt(`Insira a velocidade que deseja alterar.`);
accelerate(speed, currentShip);
let point;
point = [2, 5, "uilian", true];
let [x, y, z] = point;
console.log(point[0]);
