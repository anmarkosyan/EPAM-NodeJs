import {inspect} from "util";

// interface Vehicle {
//     name: string,// Date, [], {}
//     year: number,
//     broken: boolean,
//     summery(): string
// }
//
// interface Report{
//     summery(): string
// }
//
// const oldCar = {
//     name: 'Volo',
//     year: 1986,
//     broken: true,

//     summery(): string {
//          return `${this.name} report`
//     }
// };
//
// const drink = {
//   color: 'red',
//   sugar: 40,
//   summery(): string {
//       return `${this.color}: ${this.sugar}g.`
//   },
// };
// const printSummery = (item: Report ): void => {
//     //console.log(vehicle.name, vehicle.year, vehicle.broken);
//     console.log(item.summery());
// };
//
// printSummery(oldCar);
// printSummery(drink);
//
// //add new prop in existing interface, extends
// interface Test{
//     a: number,
//     b: string,
// }
//
// interface Test1 extends Test{
//     c: boolean
// }
//
// interface Test1 {
//     d: Date
//}
// const obj: Test1 = {a:2, b: 'asa', c: true, d: new Date()};
// console.log(obj);
//
// const d = Promise.resolve();

//============
interface PersonInfo {
    firstName:string,
    lastName:string,
    workingHours:number,
    salary:string;
}

class Employee {
    private workingHours:number;
    private salary:string;
    private firstName: string;
    private lastName: string;

    get name(): string{
        return this.firstName;
    }
    set employeeData(info: PersonInfo){
        this.firstName = info.firstName;
        this.lastName = info.lastName;
        this.workingHours = info.workingHours;
        this.salary = info.salary;
    }

    getFullName (): string {
        return `${this.firstName} ${this.lastName}`;
    };

    getAnnularSalary ( attendingDuringWeek:number = 5 ): number {
        return +attendingDuringWeek * +this.workingHours;
    };

    raiseSalary ( percent:number ): number {
        const increase = (+this.salary * +percent)/100;
        return +this.salary + increase;
    };

}
const employee = new Employee();
const personData = {
    firstName:"Karen",
    lastName:"Boyakhchyan",
    workingHours:8,
    salary:"200000"
};
employee.employeeData = personData;
console.log(employee.getFullName());
console.log(employee.getAnnularSalary());
console.log(employee.raiseSalary(40));
console.log(employee.name);
