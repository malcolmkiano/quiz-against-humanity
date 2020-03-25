import React from 'react';
import './QS.sass';
import DataContext from '../../Context/DataContext';

import Card from '../../Components/Card/Card';

/**
 * creates an object with corresponding entry/exit animations
 * @param {Boolean} show true/false for entry/exit animations
 * @param {Boolean} ignoreContainer whether or not to skip container animations
 */
function animations(show, ignoreContainer=false) {
  return {
    container: {
      animation: !ignoreContainer ? show ? 'fadeIn' : 'fadeOut' : '',
      delay: 0.5
    },
    
    main: {
      animation: show ? 'bounceInUp' : 'bounceOutUp',
      delay: !ignoreContainer ? show ? 1 : 0 : 0
    },

    content: {
      animation: show ? 'fadeInUp' : 'fadeOut',
      delay: !ignoreContainer ? show ? 1.2 : 0 : show ? 0.2 : 0
    }
  }
}

class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: props.q,
      ...animations(props.isVisible)
    }
  }

  static contextType = DataContext;

  // enables question switching animation, or
  // unmounting the component
  componentDidUpdate(props) {
    if (this.props.q > props.q) {
      this.setState({
        ...animations(false, this.props.q < this.context.questions.length)
      }, () => {
        if (this.props.q < this.context.questions.length) {
          setTimeout(() => {
            this.setState({
              ...animations(true, true),
              q: this.props.q
            }, () => this.refs.list.scrollLeft = 0)
          }, 750);
        }
      });
    }
  }

  // demonstrates scrolling on mobile devices
  // (this won't do anything if on PC since there will not be any overflow)
  componentDidMount() {
    if (!this.context.demoCompleted) {
      const list = this.refs.list;
      let position = 0;
      let interval = 10;
      let reverse = false;
      setTimeout(() => {
        let animation = setInterval(() => {
          list.scrollLeft = position;
          if (reverse === false) {
            if (position < list.scrollWidth) {
              position += interval;
            } else {
              reverse = true;
            }
          } else {
            if (position > 0) {
              position -= interval;
            } else {
              position = 0;
              clearInterval(animation);
              this.context.onDemoCompleted();
            }
          }
        }, 8);
      }, 2000);
    }
  }

  render() {
    const {container, main, content, q} = this.state;
    const {questions, score} = this.context;
    const current = questions[q] || questions[questions.length - 1];
    let i = 0;
    return (
      <section
        className={`quiz animated ${container.animation}`}
        style={{animationDelay: `${container.delay}s`}}>
        <div className="wrapper">
          <header>
            <div className="info">
              <p>Question:</p>
              <p className="number">{q + 1}<span>/{questions.length}</span></p>
            </div>
            <div className="score">
              <p>Score:</p>
              <p className="number">{score}</p>
            </div>
          </header>
          <article>
            <Card
              animation={main.animation}
              type="question"
              delay={main.delay}
              text={current.question} />

            <ul ref="list">
              {
                current.answers.map(answer => {
                  i++;
                  return (
                    <Card
                      key={i}
                      animation={content.animation}
                      type="answer"
                      delay={content.delay + (i * 0.15)}
                      text={answer}
                      onClick={this.context.onAnswer}/>
                  );
                })
              }
            </ul>
          </article>
        </div>
      </section>
    )
  }
}

export default QuizScreen;