import { DecorateOptions } from '../decorators';

class CountryMan extends DecorateOptions {
  private readonly cost: number;
  constructor(carModel: string, engine: string, horsepower: number, doorCount: number, color: string) {
    super();
    this.carModel = carModel;
    this.cost = 22000;
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
    return ` Car name: ${this.carModel}\n color: ${this.color}\n engine: ${this.engine}\n price: $${this.getTotalPrice()}`;
  }
}
const countryMan = new CountryMan('COUNTRYMAN', 'oil', 450, 4, 'white');
console.log(countryMan.getMsg());
