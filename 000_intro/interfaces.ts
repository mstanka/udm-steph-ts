// any variable type in the interface, also a function
// cannot be used for primitive types or unions e.g. interface Point = number | string;
// this must be type Point = number | string;

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// generic interface to use in various situations
interface Reportable {
  summary(): string;
}

// both objects have similar function summary, and can be considered of interface Reportable
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// }

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

// printVehicle(oldCivic);

// generic function to use for different objects
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(myDrink);

////////////////////////////////////////////
// general strategy for reusable code in TS
// - create functions that accept arguments that are typed with interfaces
// - objects/classes can decide to 'implement' a given interface to work with a function

// with ? it means that the property is not mandatory
// use postfix Interface to distinguish from class names

interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

// union operator - to combine data types
let pageName: string | number = '1';

// type alliases
type PopularTag = string;
const popularTags: PopularTag[] = ['dragon', 'coffee'];

/////// interface with functions
interface IMathFunc {
  (x: number, y: number): number;
}
const sub: IMathFunc = (x: number, y: number): number => x - y;
