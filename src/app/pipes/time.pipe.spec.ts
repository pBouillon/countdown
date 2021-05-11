import { TimePipe } from './time.pipe';

describe('TimePipe', () => {

  let pipe: TimePipe;

  beforeEach(() => {
    pipe = new TimePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should throw an error when an invalid number of second is provided', () => {
    const invalidNumberOfSeconds = -1;

    expect(function () {
      pipe.transform(invalidNumberOfSeconds);
    }).toThrow();
  });

  it('should not throw when the number of second is zero', () => {
    expect(function () {
      pipe.transform(0);
    }).not.toThrow();
  })

});
