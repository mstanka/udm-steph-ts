@classDecorator;
class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(@parameterDecorator speed: string): void {
    throw new Error();
    // console.log('swish');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

// decorator factory - normal function that return our decorator
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // console.log('Target:', target);
    // console.log('Key:', key);
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// decorator

// - first argument is the prototype of the object
// - second argument is the key of the property/method/accessor on the object
// - third argument is the property descriptor
// - decorators are applied when the code for this class is ran (not when an instance is created)