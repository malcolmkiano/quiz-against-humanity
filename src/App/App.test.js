import React from 'react'
import ReactDOM from 'react-dom';
import {create} from 'react-test-renderer';

import App from './App';
import data from '../data.json';

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('imports question data', () => {
    const component = create(<App />);
    const instance = component.getInstance();

    let matched = true;
    instance.state.questions.forEach(question => {
      if (!data.includes(question)) matched = false;
    });
    
    expect(matched).toBe(true);
  });
});
