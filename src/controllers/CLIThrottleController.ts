import inquirer from 'inquirer';
import { ThrottleModel } from '../models/ThrottleModel.js';
import { CLIThrottleView } from '../views/CLIThrottleView.js';

export class CLIThrottleController {
  private model: ThrottleModel;
  private view: CLIThrottleView;

  constructor(model: ThrottleModel, view: CLIThrottleView) {
    this.model = model;
    this.view = view;
  }

  async main() {
    const delay = 200;
    const questions = [
      {
        type: 'input',
        name: 'repeats',
        message: '¿Cuántas veces quieres llamar a la función?',
      },
    ];

    const sayHelloThrottle = this.model.throttle(this.view.sayHello, delay);

    const handleSayHelloThrottle = async () => {
      try {
        const result = await sayHelloThrottle(
          `Clicks: ${this.model.buttonClicked}`,
          '...args'
        );
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };

    inquirer.prompt(questions).then(async (answers) => {
      const repeats = parseInt(answers.repeats);

      for (let i = 0; i < repeats; i++) {
        await handleSayHelloThrottle();
      }
    });
  }
}
