// Uso do Aliases com type para deixar o codigo mais enxuto:

type PlanetSituation = "Habitado" | "Habitável" | "inabitável" | "inexplorado";

type PlanetCoordinates = [number, number, number, number];

type Planet = {
  name: string;
  coordinates: PlanetCoordinates;
  situation: PlanetSituation;
  satellites: string[];
};

// criação do Array de planetas e função de adicionar um planeta

const planets: Planet[] = [];

function addPlanet(
  name: string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation
) {
  planets.push({
    name,
    coordinates,
    situation,
    satellites: [],
  });

  alert(`O planeta ${name} foi registrado com sucesso.`);
}

// Funçaõ para encontrar um planeta:

function findPlanet(name: string) {
  const planet = planets.find((planet) => planet.name === name);

  return planet ?? false;
}

// Função para atuaçizar um planete:

function updateSituation(situation: PlanetSituation, planet: Planet) {
  planet.situation = situation;

  alert(
    `A situação do planeta ${planet.name} foi atualizada para ${situation}.`
  );
}

//Funções para adicionar satélites:

function addSatellite(name: string, planet: Planet) {
  planet.satellites.push(name);

  alert(`O satélite ${name} foi adcionado ao planeta ${planet.name}`);
}

//Funções para remover satélites:

function removeSatellite(name: string, planet: Planet) {
  planet.satellites = planet.satellites.filter(
    (satellite) => satellite !== name
  );

  alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
