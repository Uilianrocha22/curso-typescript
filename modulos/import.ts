import { Spaceship2 } from "./export";
import * as lodash from "lodash";

interface BattleSpaceship extends Spaceship2 {
  weapons: number;
}

let xWing: BattleSpaceship = {
  name: "W-wing",
  pilot: "Luke skywalker",
  speed: 50,
  weapons: 4,
};

console.log("Uilian");
console.log(lodash.camelCase(xWing.pilot));
