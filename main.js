const setPilot = async (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = async (targetSpeed, spaceship) => {
    spaceship.speed = targetSpeed;
};
const sendToMission = async (spaceship) => {
    spaceship.inMission = true;
};
const spaceship = {
    name: "",
    pilot: "",
    speed: 0,
    inMission: false,
};
const pilot = "Han Solo";
spaceship.name = "Millennium Falcon";
setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);
console.log(spaceship);
function sendSpaceShip(name, capitan) {
    const spaceship = {
        name,
        capitan,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.capitan} foi enviada em uma missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Almentando a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else {
        alert(`Mantendo a velocidade da ${spaceship.name} ...`);
    }
}
const spaceshipName = prompt(`Insira o nome da nave a ser enviada.`);
const spaceshipCapitan = prompt(`Insira o nome do capitão da nave`);
const currentShip = sendSpaceShip(spaceshipName, spaceshipCapitan);
const speed = +prompt(`Insira a velocidade que deseja alterar.`);
accelerate(speed, currentShip);
let point;
point = [2, 5, "uilian", true];
let [x, y, z] = point;
console.log(point[0]);
