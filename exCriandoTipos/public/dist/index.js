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
function findPlanet(name) {
    const planet = planets.find((planet) => planet.name === name);
    return planet ?? false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
}
