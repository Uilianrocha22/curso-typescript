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
    descriptor.value = function (...args: any[]) {
      console.log(`.................................`);
      console.log(
        `Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)} `
      );

      const result = originalMethod.apply(this, args);

      console.log(`.................................`);
      console.log(
        `O método ${key} retornou o valor: ${JSON.stringify(result)} `
      );

      return result;
    };
  };
}

class PlanetDecorator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // @Decorator()
  @Log()
  calculate(value: number) {
    console.log(`Calculando ${value} vezes 2`);
    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split("").reverse().join("");
  }
}

const planetdecorator = new PlanetDecorator("Terra");

const result = planetdecorator.calculate(5);

console.log(`Resultado é: ${result}`);

planetdecorator.invertName();
