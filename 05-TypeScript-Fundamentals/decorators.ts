// import {getHorsePowerPrice}  from './features.js'
//
// console.log(getHorsePowerPrice());
/*
1.You need to use decorator pattern for decorating the car class
2.You need to add engine on it and set power for it.
3.After that you need to set doors and color. For it you need to increase price for the car.
4.You need to provide possibility to decorate your car and
give possibility to set engine as hybrid or oil based and based on that car price should be changed.
5.You need decorate it and add price calculation method on it and after that you need to print the result

for example => `BMW with color green decorated and price 10200$ and your car has hybrid engine`.

.*/
abstract class Car {
  engine: string;
  horsepower: number;
  doorCount: number;
  color: string;

  public abstract getEnginePrice(): number;
  public abstract getHorsePowerPrice(): number;
  public abstract getDoorCountPrice(): number;
  public abstract getColorPrice(): number;
  public abstract getTotalPrice(): number;
}

abstract class DecorateOptions extends Car {
  getEnginePrice(): number {
    const enginePrice: { [hybrid: string]: number; oil: number } = { hybrid: 500, oil: 700 };
    return enginePrice[this.engine];
  }
  getHorsePowerPrice(): number {
    const power = this.horsepower;
    return power > 100 && power < 300 ? 780 : power > 300 && power < 500 ? 900 : 0;
  }

  getDoorCountPrice(): number {
    return this.doorCount === 2 ? 1300 : 3400;
  }

  getColorPrice(): number {
    const colorPrice: { [white: string]: number; black: number; silver: number } = { white: 1200, black: 2100, silver: 1800 };
    return colorPrice[this.color];
  }
}

class MiniCopper extends DecorateOptions {
  private readonly cost: number;
  constructor(engine: string, horsepower: number, doorCount: number, color: string) {
    super();
    this.cost = 15000;
    this.engine = engine;
    this.horsepower = horsepower;
    this.doorCount = doorCount;
    this.color = color;
  }
  getTotalPrice(): number {
    const addedPrice: number[] = [this.cost, this.getEnginePrice(), this.getHorsePowerPrice(), this.getDoorCountPrice(), this.getColorPrice()];

    return addedPrice.reduce((sum: number, num: number) => sum + num, 0);
  }

  getMsg(): string {
    return ` Car name: Mini Cooper\n color: ${this.color}\n engine: ${this.engine}\n price: $${this.getTotalPrice()}`;
  }
}

const miniCopper = new MiniCopper('oil', 200, 2, 'black');
console.log(miniCopper.getEnginePrice());
console.log(miniCopper.getMsg());
