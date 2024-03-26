// Existem três diferentes níveis de encapsulamento: ( private, protected e public ).

// private é acessível apenas dentro da própria classe,
// protected é acessível apenas dentro da classe e de suas herdeiras(subClasses) e
// public é visível em qualquer lugar e qualquer nível de instância (private e protected não o são)

class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    // colocaria a lógica
    return this._name;
  }

  set name(name) {
    // colocaria a lógica
    this._name = name;
  }

  constructor(name: string, captain: string) {
    this.name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

class Fighter extends Spaceship {
  protected weapons: number;
  constructor(name: string, captain: string, weapons: number) {
    super(name, captain);
    this.weapons = weapons;
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew!");
    }
  }

  erase() {
    this.captain = "";
    this.speed = 0;
  }
}

let ship = new Spaceship("USS Enterprise", "James T. Kirk");

ship.accelerate(50, 10);
let ship2 = new Fighter("Drakarys", "Uilian", 5);
