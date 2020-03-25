const data = {
  remark: {
    correct: [ 'Good Job!', 'Go You!', 'Noice!', 'Sweeeet!', 'Epic!' ],
    wrong: [ 'Wrong!', 'Nope!', 'Incorrect!', 'Wut?', 'Yeah, no.' ]
  },

  result: {
    perfect: [
      'You should be very proud of yourself. Nobody else is.',
      'You must have been studying... weirdo.',
      'Congratu-fricking-lations, nerd.',
      'Maybe your parents will love you now.'
    ],
    good: [
      'You could\'ve done better... if you were smarter.',
      'Now go out and celebrate your mediocrity. Or don\'t. COVID-19.',
      'You\'ll receive your certificate in the mail in about 41 years.',
      'Good job, you\'re smarter than a cat.'
    ],
    bad: [
      'We\'re praying for your brain. We hope you find it someday.',
      'What\'s the opposite of high scores again?',
      'You tried so hard, but you still suck.',
      'That\'s a "yikes" from us.'
    ],
    terrible: [
      'People that actually live under rocks have got better scores.',
      'That was a joke or a test run... right?',
      'A new personal worst. Oh, wait.',
      '...'
    ]
  }
}

/**
 * return a random remark based on correct/wrong answer or total score
 * @param {string} type type of result - 'remark' or 'result'
 */
function random(type, ...rest) {
  let keyword;

  if (type === 'remark') {
    let correct = rest[0];
    keyword = correct ? 'correct' : 'wrong';
    
  } else {
    let score = rest[0];
    let questions = rest[1];
    let total = score/questions;

    keyword = total === 1 ? 'perfect' : total >= .7 ? 'good' : total > 0 ? 'bad' : 'terrible';
  }

  const node = data[type][keyword];
  const index = Math.floor(Math.random() * node.length);

  return node[index];
}

export default { random, data };