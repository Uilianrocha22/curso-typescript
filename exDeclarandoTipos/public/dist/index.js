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
        const confirmation = confirm(`Confirma o envio da ${spaceship.name} na missão? `);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
