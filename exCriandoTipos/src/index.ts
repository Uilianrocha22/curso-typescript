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

// Funções auxiliares:

// função auxiliar para validar a entrada da propriedade situação.

function promptValidSituation() {
  let situation: PlanetSituation;
  let validSituation = false;

  while (!validSituation) {
    const situationInput = Number(
      prompt(
        `Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado `
      )
    );

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

function promptValidPlanet(callback: (planet: Planet) => void) {
  const planetName = prompt(`Informe o nome do planeta:`);
  const planet = findPlanet(planetName);

  if (planet) {
    callback(planet);
  } else {
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

  // Aqui a nossa função ajuda a ter um código mais organizado
  const situation = promptValidSituation();

  const confirmation = confirm(
    `Confirma o registro do planeta ${name}?\nCoordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})\nSituação: ${situation}`
  );

  if (confirmation) {
    addPlanet(
      name,
      [coordinateA, coordinateB, coordinateC, coordinateD],
      situation
    );
  } else alert(`Retornando ao menu.`);
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

function fourthMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt(`Informe o nome do satélite a ser removido:`);
    removeSatellite(satellite, planet);
  });
}

function fifthMenuOption() {
  let list = "Planetas:\n";

  planets.forEach((planet) => {
    // Repare que as tuplas são uma forma fácil de permitir a
    // desestruturação com qualquer nome nas variáveis.
    // As variáveis a seguir podem ter qualquer nome pois a
    // tupla segue um padrão fixo.
    const [a, b, c, d] = planet.coordinates;

    list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satellites.length}
    `;

    planet.satellites.forEach((satellite) => {
      list += `    - ${satellite}\n`;
    });
  });

  alert(list);
}

// Menu

let userOption = 0;

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;

  userOption = Number(prompt(menu));

  switch (userOption) {
    case 1:
      firstMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      fifthMenuOption();
      break;
    case 6:
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Opção inválida! Retornando ao painel principal...");
      break;
  }
}
