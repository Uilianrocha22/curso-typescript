// Para evitar a tipagem basta colocar um ( ? ) após o parametro

// EX no copilot :

function sendSpaceShip2(spaceship: { pilot: string; copilot?: string }) {
  //.......................
}

sendSpaceShip2({ pilot: "uilian", copilot: "chewbacca" });
sendSpaceShip2({ pilot: "luke" });
//---------------------------------------------------------------------------------
// com o tipo (unknown) você pode atribuir qualquer valor para sua variável

//let input: unknown;
let input: any;

input = "teste";
input = 5;
input = [];

let text: string;

text = input;
input = text;

//-----------------------------------------------------------------------------------

function verification(test) {
  if (test) {
  } else {
    let check: never;

    let text = check;

    text = "";

    return check;
  }
}
