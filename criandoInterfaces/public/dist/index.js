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
