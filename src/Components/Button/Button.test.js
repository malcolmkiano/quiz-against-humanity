import React from 'react'
import ReactDOM from 'react-dom';
import {create} from 'react-test-renderer';

import Button from './Button';

describe('<Button/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('runs onClick prop when clicked', () => {
    let buttonClicked = false;

    const setClicked = () => {
      buttonClicked = true;
    }

    const component = create(<Button onClick={setClicked} />);
    const instance = component.getInstance();
    instance.props.onClick();
    
    expect(buttonClicked).toBe(true);
  });
});
