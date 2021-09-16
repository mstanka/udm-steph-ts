// generics like function arguments
// allows us to define the type of a property/argument/return value at a future point

class HoldAnything<T> {
  data: T;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = 'dadafada';

/////
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference - you don't need to write <string> - but it's recommended to help you catch errors
new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything(['a', 'b', 'c']);

/// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['q', 'f', 'f']);
printAnything(['q', 'f', 'f']);

// example of generic constraints
class Car2 {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCar([new House(), new Car2()]);
