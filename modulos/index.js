define("export", ["require", "exports"], function (exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
});
define("import", ["require", "exports", "lodash"], function (exports, lodash) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  let xWing = {
    name: "W-wing",
    pilot: "Luke skywalker",
    speed: 50,
    weapons: 4,
  };
  console.log("Uilian");
  console.log(lodash.camelCase(xWing.pilot));
});
