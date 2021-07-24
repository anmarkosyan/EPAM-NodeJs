import { DecorateOptions } from '../decorators';

export class HardTop2Door extends DecorateOptions {
  private readonly cost: number;
  constructor(carModel: string, engine: string, horsepower: number, doorCount: number, color: string) {
    super();
    this.carModel = carModel;
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
    return ` Car name: ${this.carModel}\n color: ${this.color}\n engine: ${this.engine}\n price: $${this.getTotalPrice()}`;
  }
}
const hardtop2door = new HardTop2Door('HARDTOP 2 DOOR', 'oil', 200, 2, 'black');
console.log(hardtop2door.getMsg());
