export class FrontThrottleView {
  hello(...args: unknown[]) {
    console.log(args, '<== argumentos');
  }

  writeClicks(clicks: number) {
    const paragraph = document.querySelector('#clicks');
    if (paragraph) {
      paragraph.textContent = clicks.toString();
    }
  }

  writeThrottleSuccess(throttled: number) {
    const paragraphThrottled = document.querySelector('#throttled');
    if (paragraphThrottled) {
      paragraphThrottled.textContent = throttled.toString();
    }
  }
}
