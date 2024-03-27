// Tipos genéricos (ou Generics) são um recurso do TypeScript que permite que um tipo seja passado como argumento para um função ou classe. Isso é especialmente útil quando o tipo da entrada está diretamente relacionado ao tipo da saída, ou então os tipos de diferentes argumentos está relacionado entre si de alguma forma.

function first(array) {
  return array[0];
}

function last<arrayType>(array: arrayType[]): arrayType | undefined {
  return array[array.length - 1];
}

const pilots = [1, 2, 3, 4, 5]; // ["Luke", "Biggs", "Wedge", "Han", "Lando"];

const firstPilot = first(pilots);

const lastPilot = last(pilots);

interface Ship {
  name: string;
  pilot: string;
}

interface Fighter2 extends Ship {
  weapons2: number;
  shields: number;
}

interface Transport extends Ship {
  capacity: number;
}

interface Speeder extends Ship {
  speed: number;
  acceleration: number;
}

// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento

// podemos utilizar as funções genéricas para melhorar nosso código
//  agora ao passar o mouse o retorno da função usará o ShipType

// function cloneShip <ShipType extends{ name: string, pilot: string}>
// OU simplesmente passando o interface SHIP diretamente que o typescript intenderá que sera obrigatório ter pelo menos as propriedades do SHIP.:

// |
// V
function cloneShip<ShipType extends Ship>(
  ship: ShipType,
  newName: string,
  newPilot: string
) {
  const newShip = ship;
  newShip.name = newName;
  newShip.pilot = newPilot;
  return newShip;
}

const falcon: Ship = {
  name: "Millenium Falcon",
  pilot: "Han",
};

const xWing2: Fighter2 = {
  name: "Red Five",
  pilot: "Luke",
  weapons2: 4,
  shields: 1,
};

// Agora a cópia funciona e os tipos inferidos estão corretos
// copy1 é do tipo Ship e copy2 do tipo Fighter
const copy1 = cloneShip(falcon, "Milano", "Peter");
const copy2 = cloneShip(xWing2, "Black One", "Poe");

// Outra coisa que pode ser necessária em alguns momentos é especificar manualmente o tipo para a função genérica.
// Imagine que no nosso caso não queremos que o VS Code infira automaticamente o mesmo tipo que passamos, ao invés disso queremos forçar um tipo diferente.

interface EnemyShip {
  name: string;
  pilot: string;
  flag?: string;
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, "Enemy", "EnemyPilot");

// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, "enemy", "enemyPilot");

// Aqui temos um erro por conta do tipo Ship
enemyCopy.flag = "Imperial";

// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = "Imperial";
