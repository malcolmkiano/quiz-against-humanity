import React from 'react';
import './OV.sass';
import DataContext from '../../Context/DataContext';
import messages from '../../Modules/messages';

import Button from '../../Components/Button/Button';

function animations(show){
  return {
    container: {
      animation: show ? 'fadeIn' : 'fadeOut',
    },

    content: {
      animation: show ? 'zoomIn' : 'zoomOut',
    }
  }
}

class Overlay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...animations(props.isVisible)
    }
  }

  static contextType = DataContext;

  componentDidMount() {
    const {questions, questionNumber, selectedAnswer} = this.context;
    const q = questions[questionNumber] || questions[questions.length - 1];
    const correctAnswer = q.answers[q.correctAnswer];
    const isCorrect = selectedAnswer === correctAnswer;

    const msg = messages.random('remark', isCorrect);
    this.setState({
      remark: msg
    });
  }

  componentDidUpdate(props) {
    if (props.isVisible !== this.props.isVisible) {
      const show = this.props.isVisible;
      this.setState({ ...animations(show) }) ;
    }
  }

  handleClose = () => {
    this.setState({
      ...animations(false)
    }, this.props.onClose);
  }

  render() {
    const {container, content} = this.state;
    const {questions, questionNumber, selectedAnswer} = this.context;

    const q = questions[questionNumber] || questions[questions.length - 1];
    const correctAnswer = q.answers[q.correctAnswer];
    const isCorrect = selectedAnswer === correctAnswer;

    const parts = q.question.split('_____');
    const body = (
      <>
        {parts[0]}<span className="correct">{correctAnswer.toLowerCase()}</span>{parts[1]}
      </>
    );
    const selection = (
      <>
        <br/><br/>
        You selected: <span className="wrong">{selectedAnswer}</span>
      </>
    );

    return (
      <div
        className={`overlay animated ${container.animation}`}>
        <article
          className={`animated ${content.animation}`}>
          <h2>{this.state.remark}</h2>
          <p>
            {body}
            {!isCorrect ? selection : ''}
          </p>
          <Button type="btn-small btn-alt" onClick={this.handleClose}>
            {questionNumber < questions.length - 1 ? 'Next Question!' : 'See Results!'}
          </Button>
        </article>
      </div>
    )
  }
}

export default Overlay;