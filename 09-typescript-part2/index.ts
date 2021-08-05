interface Transport {
  speed: number;
  color: string;
  engine: number;
}

class Car implements Transport {
  color: string;
  engine: number;
  speed: number;
  name: string;
  constructor(speed: number, color: string, engine: number, name: string) {
    this.speed = speed;
    this.color = color;
    this.engine = engine;
    this.name = name;
  }
  getModelOfCar(): string {
    return ` Car1: ${this.name}\n Engine: ${this.engine}\n Color: ${this.color}\n Speed: ${this.engine}`;
  }
}

const car1: Car = new Car(34, 'white', 345, 'Volvo XC40');
console.log(car1.getModelOfCar());
// class Train implements Transport {}
// class Ship implements Transport {}
