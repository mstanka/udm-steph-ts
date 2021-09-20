import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrr');
  }
}

// Reflect.defineMetadata('note', 'hi there', plane);
// console.log(plane);

// const note = Reflect.getMetadata('note, plane');
// console.log(note);

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    router.get(path, middleware, target.prototype[key]);
  }
}
