import shuffle from './shuffle';

describe('shuffle()', () => {
  it(`shuffles an array`, () => {
    const array = [ 1, 2, 3 ];
    const shuffled = shuffle(array);
    let mismatch = false;

    for (let i = 0; i < shuffled.length; i++) {
      if (shuffled[i] !== array[i]){
        mismatch = true;
        break;
      }
    }

    expect(mismatch).toBe(true);
  });

  it(`returns false when given non-array`, () => {
    const array = shuffle(420);
    expect(array).toBe(false);
  });
});
