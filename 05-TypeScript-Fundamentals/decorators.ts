/*
1.You need to use decorator pattern for decorating the car class
2.You need to add engine on it and set power for it.
3.After that you need to set doors and color. For it you need to increase price for the car.
4.You need to provide possibility to decorate your car and
give possibility to set engine as hybrid or oil based and based on that car price should be changed.
5.You need decorate it and add price calculation method on it and after that you need to print the result

for example => `BMW with color green decorated and price 10200$ and your car has hybrid engine`.
*/
abstract class Car {
  carModel: string;
  engine: string;
  horsepower: number;
  doorCount: number;
  color: string;

  abstract getEnginePrice(): number;
  abstract getHorsePowerPrice(): number;
  abstract getDoorCountPrice(): number;
  abstract getColorPrice(): number;
}
//to find the imported module go to the ./models directory
export class DecorateDetails extends Car {
  getEnginePrice(): number {
    const enginePrice: { [hybrid: string]: number; oil: number } = { hybrid: 500, oil: 700 };

    if (this.engine && enginePrice[this.engine]) return enginePrice[this.engine];
    else throw new Error('💥 500: Something went wrong!').message;
  }
  getHorsePowerPrice(): number {
    const power = this.horsepower;
    if (power && power > 100 && power < 300) return 780;
    else if (power && power > 300 && power < 500) return 900;
    else throw new Error('💥 500: Something went wrong!').message;
  }

  getDoorCountPrice(): number {
    if (this.doorCount) {
      if (this.doorCount === 2) return 1300;
      else if (this.doorCount === 4) return 3400;
    } else throw new Error('💥 500: Something went wrong!').message;
  }

  getColorPrice(): number {
    const colorPrice: { [white: string]: number; black: number; silver: number } = { white: 1200, black: 2100, silver: 1800 };
    if (this.color && colorPrice[this.color]) return colorPrice[this.color];
    else throw new Error('💥 500: Something went wrong!').message;
  }
}
