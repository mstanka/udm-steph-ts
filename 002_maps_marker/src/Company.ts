import faker from 'faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
  public companyName: string;
  public catchPhrase: string;
  public location: {
    lat: number;
    lng: number;
  };
  public color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h2>Catchphrase: ${this.catchPhrase}</h2>
      </div>
      `;
  }
}
