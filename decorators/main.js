var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators são um tipo especial de declaração que pode ser anexada a uma classe, método, propriedade, accessor ou parâmetro. Ele utilizam o formato @expression, onde expression é uma função que vai ser chamada na execução com informações sobre a declaração decorada. Resumidamente, com isso é possível acrescentar funcionalidades extras aonde quer que o decorator seja inserido.
// function Decorator() {
//   return function (target, key, descriptor) {
//     // descriptor.value é o nosso método decorado
//     // vamos atribuir a ele uma nova função.
//     descriptor.value = function (value: number) {
//       console.log(`Calculando ${value} elevado ao quadrado`);
//       return value ** 2;
//     };
//   };
// }
function Log() {
    return function (target, key, descriptor) {
        // Aqui guardamos o método original para chamá-lo manualmente
        const originalMethod = descriptor.value;
        // Aqui estamos usando a técnica de desestruturar um array
        // de argumentos para repassar quaisquer que sejam os
        // argumentos originais
        descriptor.value = function (...args) {
            console.log(`.................................`);
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)} `);
            const result = originalMethod.apply(this, args);
            console.log(`.................................`);
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)} `);
            return result;
        };
    };
}
class PlanetDecorator {
    name;
    constructor(name) {
        this.name = name;
    }
    // @Decorator()
    calculate(value) {
        console.log(`Calculando ${value} vezes 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split("").reverse().join("");
    }
}
__decorate([
    Log()
], PlanetDecorator.prototype, "calculate", null);
__decorate([
    Log()
], PlanetDecorator.prototype, "invertName", null);
const planetdecorator = new PlanetDecorator("Terra");
const result = planetdecorator.calculate(5);
console.log(`Resultado é: ${result}`);
planetdecorator.invertName();
