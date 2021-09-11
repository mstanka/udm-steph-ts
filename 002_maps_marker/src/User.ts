import faker from 'faker';
import { IMappable } from './CustomMap';

export class User implements IMappable {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };
  public color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
