import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get on() {
    return this.events.on;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
    });

    this.trigger('change');
  }
}
