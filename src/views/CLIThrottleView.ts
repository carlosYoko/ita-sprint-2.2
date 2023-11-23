export class CLIThrottleView {
  showError(error: unknown) {
    console.log(error);
  }

  showResult(result: unknown) {
    console.log(result, '<== argumentos');
  }

  sayHello(...args: unknown[]) {
    console.log(args, 'Hello IT-Academy');
  }
}
