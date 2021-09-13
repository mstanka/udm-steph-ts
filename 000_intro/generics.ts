// generics like function arguments
// allows us to define the type of a property/argument/return value at a future point

class HoldAnything<T> {
  data: T;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = 'dadafada';
