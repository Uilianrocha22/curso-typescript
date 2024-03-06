// tipo literal:
// são tipos representados por conteúdos específicos.
// variáveis const são altomaticamente literais.
// mas variaveis let também pode ser tipadas como literais
let literal;
let pi;
// literal = "hi, world"; === ERROR
// ------------------------------------------
// Union tipes:
// Unions são tipos que unem diferentes possibilidades de tipos
let option;
option = 1;
option = "1";
// option = false === ERROR
let option2;
option2 = "maybe";
let planet;
let homePlanet;
homePlanet = "Urano";
if (homePlanet === "Urano") {
    console.log("Estamos em Urano.");
}
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra.");
    }
}
checkPlanet("Terra");
function greet(callbackfn) {
    callbackfn("Uilian");
}
