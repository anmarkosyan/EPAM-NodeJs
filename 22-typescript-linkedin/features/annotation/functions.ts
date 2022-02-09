const add = (a: number, b:number): number => {
    return a + b;
    //console.log(a + b);

};
add(2, 3);

const logger = function(message: string): void{
    console.log(message);

}
logger('hi');

// const throwError = function(message: string): never{
//     throw new Error(message);
// }
// throwError('error');

//destructuring
const price = {
    cost: 123,
    name: 'Aram'
};

const userName = function({name}: {cost: number,name: string}): void{
    console.log(name);


}
userName(price);