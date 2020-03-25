import messages from './messages';

describe('messages.random()', () => {
  it(`returns a correct remark when given type='remark' and 'true' args`, () => {
    const remark = messages.random('remark', true);
    const isCorrect = messages.data.remark.correct.includes(remark);

    expect(isCorrect).toBe(true);
  });

  it(`returns a wrong remark when given type='remark' and 'false' args`, () => {
    const remark = messages.random('remark');
    const isWrong = messages.data.remark.wrong.includes(remark);

    expect(isWrong).toBe(true);
  });

  it(`returns a perfect result when given type='result' and '1/1' args`, () => {
    const result = messages.random('result',1,1);
    const isPerfect = messages.data.result.perfect.includes(result);

    expect(isPerfect).toBe(true);
  });

  it(`returns a terrible result when given type='result' and no score args`, () => {
    const result = messages.random('result');
    const isTerrible = messages.data.result.terrible.includes(result);

    expect(isTerrible).toBe(true);
  });
});
