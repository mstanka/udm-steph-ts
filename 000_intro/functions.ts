///////////////////////////////////
///////////////////// FUNCTIONS
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  // return nothing
  console.log(message);
};

const throwError = (message: string): never => {
  // never return anything
  throw new Error(message);
};

// const throwError = (message: string): string => {
//   if(!message) {
//     throw new Error(message);
//   }
//   return message;
// }

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (todaysWeather: {date: Date, weather: string}): void => {
//   console.log(todaysWeather.date);
//   console.log(todaysWeather.weather);
// }

// ES2015
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
