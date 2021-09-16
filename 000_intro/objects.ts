///////////////////////////////////
///////////////////// OBJECTS
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 1,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

/// set type outside of the object to be more readable
// or you can use interface here
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};
