type PlanetSituation = "Habitado" | "Habitável" | "inabitável" | "inexplorado";

type PlanetCoordinates = [number, number, number, number];

type Planet = {
  name: string;
  coordinates: PlanetCoordinates;
  situation: PlanetSituation;
  satellites: string[];
};

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

function findPlanet(name: string) {
  const planet = planets.find((planet) => planet.name === name);

  return planet ?? false;
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
  planet.situation = situation;

  alert(
    `A situação do planeta ${planet.name} foi atualizada para ${situation}.`
  );
}

function addSatellite(name: string, planet: Planet) {
  planet.satellites.push(name);

  alert(`O satélite ${name} foi adcionado ao planeta ${planet.name}`);
}

function removeSatellite(name: string, planet: Planet) {
  planet.satellites = planet.satellites.filter(
    (satellite) => satellite !== name
  );

  alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
