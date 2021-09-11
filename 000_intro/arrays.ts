///////////////////////////////////
///////////////////// ARRAYS
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

const carMakers = ['ford', 'toyota', 'chevy'];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values
const myCar = carMakers[0];

// prevent incompatible values
// carMakers.push(100);  // error

// help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
