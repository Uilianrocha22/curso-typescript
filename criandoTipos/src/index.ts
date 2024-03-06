// tipo literal:
// são tipos representados por conteúdos específicos.
// variáveis const são altomaticamente literais.
// mas variaveis let também pode ser tipadas como literais

let literal: "hello, world";
let pi: "3.14159";

// literal = "hi, world"; === ERROR

// ------------------------------------------

// Union tipes:
// Unions são tipos que unem diferentes possibilidades de tipos

let option: string | number;

option = 1;
option = "1";

// option = false === ERROR

let option2: "yes" | "no" | "maybe";

option2 = "maybe";

//type Alias e como usar:

type planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

let planet: planet;

let homePlanet: planet;

homePlanet = "Urano";

if (homePlanet === "Urano") {
  console.log("Estamos em Urano.");
}

function checkPlanet(planet: planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra.");
  }
}
checkPlanet("Terra");

type GreetingCallback = (name: string) => void;

function greet(callback: GreetingCallback) {
  const name = prompt("Qual é o seu nome?");

  callback(name);
}
