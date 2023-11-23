import { ThrottleModel } from '../models/ThrottleModel';

describe('test funcion throttle', () => {
  let throttle: ThrottleModel;

  beforeEach(() => {
    throttle = new ThrottleModel();
  });

  it('varias llamadas a la funcion con espera del delay entre medio', async () => {
    const delay = 100;
    const myFnMock = jest.fn();
    const handleTrotthle = throttle.throttle(myFnMock, delay);

    await handleTrotthle();
    await new Promise((resolve) => setTimeout(resolve, 110));
    await handleTrotthle();

    expect(myFnMock).toHaveBeenCalledTimes(2);
  });

  it('verificar que se rechaza la promesa cuando se llama varias veces antes del delay ', async () => {
    const delay = 200;
    const myFnMock = jest.fn();
    const handleTrotthle = throttle.throttle(myFnMock, delay);

    await handleTrotthle();
    try {
      await handleTrotthle();
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Todavía no se puede ejecutar la función');
      }
    }

    expect(myFnMock).toHaveBeenCalledTimes(1);
  });
});
