//////////////////////// classes
// blueprint to create an object with some fields (values and methods (functions) to represent a 'thing')

class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

console.log(typeof Vehicle); // function

const vehicle = new Vehicle('orange');
console.log(typeof vehicle);  // object
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // it calls constructor function of the parent class
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'green');
car.startDrivingProcess();

////////////////////////////////
// public - can be called any where any time
// private - can be called by other methods in this class
// protected - can be called by other methods in this class or by other methods in child class
// readonly
// static property - only accessible on class itself not on instances
