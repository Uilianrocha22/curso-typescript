// Um array vai ser usado para salvar as naves de forma mais simplificada

const spaceships = [];

// Funções principais

// Primeiro a função de adicionar uma nave:
function addSpaceship(name: string, pilot: string, crewLimit: number) {
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

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: Number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => {
    return ship.name === name;
  });

  return spaceship;
}
