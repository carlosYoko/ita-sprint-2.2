import { ThrottleModel } from '../models/ThrottleModel.js';
import { FrontThrottleView } from '../views/FrontThrottleView.js';

export class FrontThrottleController {
  private model: ThrottleModel;
  private frontView: FrontThrottleView;

  constructor(model: ThrottleModel, frontView: FrontThrottleView) {
    this.model = model;
    this.frontView = frontView;
  }

  async initialThrottle(delay: number) {
    const button = document.querySelector('#button');
    button?.addEventListener('click', async () => {
      hanldeSayHelloThrottle();
      this.frontView.writeClicks(this.model.buttonClicked);
    });

    const sayHelloThrottle = this.model.throttle(this.frontView.hello, delay);
    const hanldeSayHelloThrottle = async () => {
      try {
        const result = await sayHelloThrottle(
          `Clicks: ${this.model.buttonClicked + 1}`,
          '...args'
        );
        if (result === undefined) {
          this.frontView.writeThrottleSuccess(this.model.trhottled);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };
  }
}
