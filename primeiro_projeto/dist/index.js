function sendSpaceShip(name, capitan) {
  const spaceship = {
    name,
    capitan,
    speed: 20,
    inMission: true,
    crew: [],
  };
  alert(
    `A nave ${spaceship.name} comandada pelo capitão ${spaceship.capitan} foi enviada em uma missão`
  );
  return spaceship;
}
function accelerate(targetSpeed, spaceship) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
  } else if (spaceship.speed < targetSpeed) {
    alert(
      `Almentando a velocidade da ${spaceship.name} para ${targetSpeed}...`
    );
  } else {
    alert(`Mantendo a velocidade da ${spaceship.name} ...`);
  }
}
const spaceshipName = prompt(`Insira o nome da nave a ser enviada.`);
const spaceshipCapitan = prompt(`Insira o nome do capitão da nave`);
const currentShip = sendSpaceShip(spaceshipName, spaceshipCapitan);
const speed = +prompt(`Insira a velocidade que deseja alterar.`);
accelerate(speed, currentShip);
