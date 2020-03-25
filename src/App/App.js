import React from 'react';
import './App.sass';
import DataContext from '../Context/DataContext';

import animate from '../Modules/animate';
import shuffle from '../Modules/shuffle';

// data is manually imported for now
import data from '../data.json';

// views
import SS from '../Views/StartScreen/SS';
import QS from '../Views/QuizScreen/QS';
import OV from '../Views/Overlay/OV';
import RS from '../Views/ResultScreen/RS';

const StartScreen = animate(SS);
const QuizScreen = animate(QS);
const Overlay = animate(OV);
const ResultScreen = animate(RS);

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      quizStarted: false,
      questionNumber: 0,
      selectedAnswer: null,
      score: 0,

      questions: shuffle(data),

      demoCompleted: localStorage.getItem('demo') || false,
      startingOver: false,
      loading: false,
      
      appVersion: '1.0.1'
    };
  }

  /** start the quiz if there are questions in the state */
  handleStart = () => {
    this.setState({ quizStarted: true });
    return true;
  }

  /** checks submitted answers against correct answer and updates state */
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

  /** runs when scroll demonstration is completed to prevent re-showing */
  handleDemoCompleted = () => {
    this.setState({ demoCompleted: true }, () => {
      localStorage.setItem('demo', true);
    })
  }

  /** closes overlay component and moves to next question */
  handleClose = () => {
    const {questionNumber} = this.state;
    this.setState({
      selectedAnswer: null,
      questionNumber: questionNumber + 1
    });
  }

  /** resets state values to restart quiz */
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

    // set up values and event handlers for context provider
    const contextValue = {
      ...this.state,
      onAnswer: this.handleAnswer,
      onDemoCompleted: this.handleDemoCompleted
    };

    // grab necessary values from state
    const {quizStarted, questionNumber, questions, selectedAnswer, startingOver, loading} = this.state;

    return (
      <>
        <DataContext.Provider value={contextValue}>
        
          <StartScreen
            isVisible={!quizStarted}
            startingOver={startingOver}
            isLoading={loading}
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
