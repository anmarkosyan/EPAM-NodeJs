import {inspect} from "util";

interface Vehicle {
    name: string,// Date, [], {}
    year: number,
    broken: boolean,
    summery(): string
}

interface Report{
    summery(): string
}

const oldCar = {
    name: 'Volo',
    year: 1986,
    broken: true,

    summery(): string {
         return `${this.name} report`
    }
};

const drink = {
  color: 'red',
  sugar: 40,
  summery(): string {
      return `${this.color}: ${this.sugar}g.`
  },
};
const printSummery = (item: Report ): void => {
    //console.log(vehicle.name, vehicle.year, vehicle.broken);
    console.log(item.summery());
};

printSummery(oldCar);
printSummery(drink);

//add new prop in existing interface, extends
interface Test{
    a: number,
    b: string,
}

interface Test1 extends Test{
    c: boolean
}

interface Test1 {
    d: Date
}
const obj: Test1 = {a:2, b: 'asa', c: true, d: new Date()};
console.log(obj);


