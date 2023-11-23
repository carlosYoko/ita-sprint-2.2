import { ThrottleModel } from './models/ThrottleModel.js';
import { FrontThrottleView } from './views/FrontThrottleView.js';
import { FrontThrottleController } from './controllers/FrontThrottleController.js';

const throttleModel = new ThrottleModel();
const throttleView = new FrontThrottleView();
const throttleController = new FrontThrottleController(
  throttleModel,
  throttleView
);

throttleController.initialThrottle(1500);

// const button = document.querySelector('#button');

// let buttonClicked = 0;

// button?.addEventListener('click', async () => {
//   buttonClicked++;
//   console.log(`Clicks: ${buttonClicked}`);
//   handleSayHelloThrottle();
// });

// const sayHello = (...args: unknown[]) => {
//   console.log(args);
// };

// type TypeFnThrottle = (
//   fn: (...args: unknown[]) => void,
//   delay: number
// ) => (...args: unknown[]) => Promise<unknown>;

// const throttle: TypeFnThrottle = (fn, delay) => {
//   let timerFlag: NodeJS.Timeout | null = null;
//   return (...args) => {
//     return new Promise((res, rej) => {
//       if (timerFlag === null) {
//         res(fn(...args));
//         timerFlag = setTimeout(() => {
//           timerFlag = null;
//         }, delay);
//       } else {
//         rej(new Error('Todavia no se puede ejecutar la funcion'));
//       }
//     });
//   };
// };

// const sayHelloThrottle = throttle(sayHello, 1500);

// const handleSayHelloThrottle = async () => {
//   try {
//     const result = await sayHelloThrottle('perro', 'avion');
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       console.error(err.message);
//     }
//   }
// };
