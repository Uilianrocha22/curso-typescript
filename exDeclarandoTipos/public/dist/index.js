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
//  7. Agora a função de encontrar uma nave:
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => {
        return ship.name === name;
    });
    return spaceship;
}
