/*
1.You need to use decorator pattern for decorating the car class
2.You need to add engine on it and set power for it.
3.After that you need to set doors and color. For it you need to increase price for the car.
4.You need to provide possibility to decorate your car and
give possibility to set engine as hybrid or oil based and based on that car price should be changed.
5.You need decorate it and add price calculation method on it and after that you need to print the result

for example => `BMW with color green decorated and price 10200$ and your car has hybrid engine`.
*/
//component class
abstract class Car {
  public carModel: string;

  public getMsg(): string {
    return this.carModel;
  }

  public abstract price(): number;
}

//concrete component class
class MiniCooper extends Car {
  public carModel = 'Mini Cooper';
  price(): number {
    return 15000;
  }
}

//decorator class
abstract class MiniCooperDecorator extends Car {
  public abstract carModel: string;
  public abstract price(): number;
}

//concrete decorator class
class Door extends MiniCooperDecorator {
  public carModel: string;
  doorCount: number;

  constructor(doorCount: number) {
    super();
    this.doorCount = doorCount;
  }

  price(): number {
    if (this.doorCount) {
      if (this.doorCount === 2) return 780;
      else if (this.doorCount === 4) return 1500;
    } else throw new Error('💥 500 ERROR: Something went wrong!').message;
  }
}

class Engine extends MiniCooperDecorator {
  public carModel: string;
  engine: string;

  constructor(engine: string) {
    super();
    this.engine = engine.toLowerCase();
  }

  price(): number {
    const enginePrice: { [hybrid: string]: number; oil: number } = { hybrid: 500, oil: 700 };

    if (this.engine && enginePrice[this.engine]) return enginePrice[this.engine];
    else throw new Error('💥 500 ERROR: Something went wrong!').message;
  }
}

class Color extends MiniCooperDecorator {
  public carModel: string;
  color: string;

  constructor(color: string) {
    super();
    this.color = color.toLowerCase();
  }

  price(): number {
    const colorPrice: { [white: string]: number; black: number; silver: number } = { white: 1200, black: 2100, silver: 1800 };
    if (this.color && colorPrice[this.color]) return colorPrice[this.color];
    else throw new Error('💥 500 ERROR: Something went wrong!').message;
  }
}
class Horsepower extends MiniCooperDecorator {
  public carModel: string;
  horsepower: number;

  constructor(horsepower: number) {
    super();
    this.horsepower = horsepower;
  }

  price(): number {
    const power: number = this.horsepower;
    if (power && power > 100 && power < 300) return 780;
    else if (power && power > 300 && power < 500) return 900;
    else throw new Error('💥 500 ERROR: Something went wrong!').message;
  }
}

//execution
const getTotalPrice = function (): string {
  const mini = new MiniCooper();
  const doorPrice = new Door(4);
  const enginePrice = new Engine('hybrid');
  const colorPrice = new Color('white');
  const horsepowerPrice = new Horsepower(150);

  const addedPrice: number[] = [doorPrice.price(), enginePrice.price(), colorPrice.price(), horsepowerPrice.price()];
  const totalPrice = addedPrice.reduce((sum: number, num: number) => sum + num, 0) + mini.price();

  return ` Car Model:${mini.getMsg()}\n Color: ${colorPrice.color}\n Engine: ${enginePrice.engine}\n Total price: ${totalPrice}`;
};

const miniCooper = getTotalPrice();
console.log(miniCooper);
