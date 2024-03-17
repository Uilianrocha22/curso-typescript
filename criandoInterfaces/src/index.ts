type Globs = {
  name: string;
  satellites: string[];
};

// Uma Interface é outra maneira de declarar um tipo para um objeto,  portanto funciona de forma semelhante

// Criação de uma interface

interface CelestialBody {
  name: string;
  mass: number;
}

// Interfaces podem ser herdadas ou herdar umas às outras

interface Star extends CelestialBody {
  age: number;
  planets: Globs[];
}

interface Glob extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

let sum: Star;

(sum.name = "Sol"),
  (sum.age = 4.603 * 10 ** 30),
  (sum.mass = 1.989 * 10 ** 9),
  (sum.planets = []);

// Interfaces com CLASSES

// Classes podem implementar interfaces Nesse caso ela cria o que chamamos de contrato, pois obriga a classe a implementar tudo o que foi definido na interface

class MilkyWayPlanet implements Glob {
  name: string;
  mass: number;
  population: number;
  satellites: string[];

  constructor(
    name: string,
    mass: number,
    population: number,
    satellites: string[]
  ) {
    (this.name = name),
      (this.mass = mass),
      (this.population = population),
      (this.satellites = satellites);
  }

  createSatellite(name: string) {
    // ...
  }
}

interface Glob {
  satellites?: string[];
}
