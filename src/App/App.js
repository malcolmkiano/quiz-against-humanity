import React from 'react';
import './App.sass';
import DataContext from '../Context/DataContext';

import animate from '../Modules/animate';
import shuffle from '../Modules/shuffle';

// contains firebase config
import config from '../Modules/secrets';
import firebase from 'firebase/app';
import 'firebase/firestore';

// views
import SS from '../Views/StartScreen/SS';
import QS from '../Views/QuizScreen/QS';
import OV from '../Views/Overlay/OV';
import RS from '../Views/ResultScreen/RS';

const StartScreen = animate(SS);
const QuizScreen = animate(QS);
const Overlay = animate(OV);
const ResultScreen = animate(RS);

let db;

class App extends React.Component {
  constructor(){
    super();

    firebase.initializeApp(config);
    db = firebase.firestore();
    db.enablePersistence();

    this.state = {
      quizStarted: false,
      questionNumber: 0,
      selectedAnswer: null,
      score: 0,

      questions: [],

      demoCompleted: localStorage.getItem('demo') || false,
      startingOver: false,
      loading: true,
      
      appVersion: '1.0.2'
    };
  }

  handleStart = () => {
    if (this.state.questions.length === 0){
        this.getQuestions();
        return false;
    } else {
      this.setState({ quizStarted: true });
      return true;
    }
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
    this.setState({ demoCompleted: true }, () => {
      localStorage.setItem('demo', true);
    })
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

      questions: shuffle(this.state.questions),

      startingOver: true
    })
  }

  getQuestions() {
    const questions = [];
    db.collection('questions').get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          questions[doc.id] = doc.data();
          questions[doc.id].answers = [];
          db.collection('answers').doc(doc.id).get()
            .then(item => {
              const answers = item.data();
              Object.keys(answers).forEach(key => {
                questions[doc.id].answers[key] = answers[key];
              })
            })
        })
      })
      .then(() => {
        this.setState({
          questions: shuffle(questions),
          loading: false
        })

        if (questions.length === 0) {
          alert('Something went wrong. Please try again later.');
        }

      })
      .catch(err => {
        alert('Something went wrong. Please try again later.');
      });
  }

  componentDidMount() {
    this.getQuestions();    
  }

  render() {
    const contextValue = {
      ...this.state,
      onAnswer: this.handleAnswer,
      onDemoCompleted: this.handleDemoCompleted
    };

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
