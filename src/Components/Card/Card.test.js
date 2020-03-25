import React from 'react'
import ReactDOM from 'react-dom';
import {create} from 'react-test-renderer';

import Card from './Card';

describe('<Card/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders in a <p> when given type="question" prop', () => {
    const component = create(<Card type="question" />);
    const instance = component.root;
    const hasTag = Boolean(instance.findByType("p"));
    
    expect(hasTag).toBe(true);
  });

  it('renders in a <li> in any other case', () => {
    const component = create(<Card />);
    const instance = component.root;
    const hasTag = Boolean(instance.findByType("li"));
    
    expect(hasTag).toBe(true);
  });
});
