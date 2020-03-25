import React from 'react'
import ReactDOM from 'react-dom';

import data from '../../data.json';

import QS from './QS';
import DataContext from '../../Context/DataContext';

const contextValue = {
  quizStarted: true,
  questionNumber: 0,
  selectedAnswer: null,
  score: 0,

  questions: data,
};

describe('<QS />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <DataContext.Provider value={contextValue}>
      <QS />
    </DataContext.Provider>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
