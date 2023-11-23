type TypeFnThrottle = (
  fn: (...args: unknown[]) => void,
  delay: number
) => (...args: unknown[]) => Promise<unknown>;

export class ThrottleModel {
  buttonClicked: number = 0;
  trhottled: number = 0;

  throttle: TypeFnThrottle = (fn, delay) => {
    let timerFlag: NodeJS.Timeout | null = null;

    return (...args: unknown[]) => {
      return new Promise((res, rej) => {
        if (timerFlag === null) {
          this.buttonClicked++;
          this.trhottled++;
          res(fn(...args));
          timerFlag = setTimeout(() => {
            timerFlag = null;
          }, delay);
        } else {
          this.buttonClicked++;
          rej(new Error('Todavía no se puede ejecutar la función'));
        }
      });
    };
  };

  saYhello(...args: unknown[]) {
    return args;
  }
}
