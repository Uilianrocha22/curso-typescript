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
function fourMenuOption() {
    promptValidPlanet((planet) => {
        const satellite = prompt(`Informe o nome do satélite a ser removido:`);
        removeSatellite(satellite, planet);
    });
}
