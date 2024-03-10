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
// Funções auxiliares
// função para validar a entrada da propriedade situação:
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
