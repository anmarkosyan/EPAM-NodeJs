import { DecorateDetails } from '../decorators';

class CountryMan extends DecorateDetails {
  private readonly cost: number;
  constructor(carModel: string, engine: string, horsepower: number, doorCount: number, color: string) {
    super();
    this.carModel = carModel;
    this.cost = 22000;
    this.engine = engine.toLowerCase();
    this.horsepower = horsepower;
    this.doorCount = doorCount;
    this.color = color.toLowerCase();
  }
  getTotalPrice(): number {
    const addedPrice: number[] = [this.cost, this.getEnginePrice(), this.getHorsePowerPrice(), this.getDoorCountPrice(), this.getColorPrice()];
    return addedPrice.reduce((sum: number, num: number) => sum + num, 0);
  }

  getMsg(): string {
    return ` Car name: ${this.carModel}\n color: ${this.color}\n engine: ${this.engine}\n price: $${this.getTotalPrice()}`;
  }
}
const countryMan = new CountryMan('COUNTRYMAN', 'ass', 90, 3, 'white');
console.log(countryMan.getMsg());
