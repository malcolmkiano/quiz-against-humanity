import React from 'react';
import './App.sass';
import DataContext from '../Context/DataContext';

import data from '../Modules/data';
import animate from '../Modules/animate';

import SS from '../Views/StartScreen/SS';
import QS from '../Views/QuizScreen/QS';
import OV from '../Views/Overlay/OV';
import RS from '../Views/ResultScreen/RS';

const StartScreen = animate(SS);
const QuizScreen = animate(QS);
const Overlay = animate(OV);
const ResultScreen = animate(RS);

function shuffle(array) {
  let array_copy = [...array];
  for (let i = array_copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array_copy[i], array_copy[j]] = [array_copy[j], array_copy[i]];
  }
  return array_copy;
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      quizStarted: false,
      questionNumber: 0,
      selectedAnswer: null,
      score: 0,

      questions: shuffle(data),

      demoCompleted: false,
      startingOver: false,
      
      appVersion: '1.0.0'
    };
  }

  handleStart = () => {
    this.setState({ quizStarted: true });
  }

  handleAnswer = (answer) => {
    const {questions, questionNumber, score} = this.state;
    const q = questions[questionNumber];
    let correctAnswer = q.answers[q.correctAnswer];

    this.setState({ selectedAnswer: answer });
    
    if (answer === correctAnswer) {
      this.setState({
        score: score + 1
      })
    }
  }

  handleDemoCompleted = () => {
    this.setState({ demoCompleted: true })
  }

  handleClose = () => {
    const {questionNumber} = this.state;
    this.setState({
      selectedAnswer: null,
      questionNumber: questionNumber + 1
    });
  }

  handlePlayAgain = () => {
    this.setState({
      quizStarted: false,
      questionNumber: 0,
      selectedAnswer: null,
      score: 0,

      questions: shuffle(data),

      startingOver: true
    })
  }

  render() {
    const contextValue = {
      ...this.state,
      onAnswer: this.handleAnswer,
      onDemoCompleted: this.handleDemoCompleted
    };

    const {quizStarted, questionNumber, questions, selectedAnswer, startingOver} = this.state;

    return (
      <>
        <DataContext.Provider value={contextValue}>
        
          <StartScreen
            isVisible={!quizStarted}
            startingOver={startingOver}
            onStart={this.handleStart} />

          <QuizScreen
            isVisible={quizStarted && questionNumber < questions.length}
            q={questionNumber} />

          <Overlay
            isVisible={questionNumber < questions.length && selectedAnswer}
            onClose={this.handleClose} />

          <ResultScreen
            isVisible={quizStarted && questionNumber >= questions.length}
            onPlayAgain={this.handlePlayAgain} />

        </DataContext.Provider>
      </>
    )
  }
}

export default App;
