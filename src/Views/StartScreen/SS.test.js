import React from 'react'
import ReactDOM from 'react-dom';

import SS from './SS';

describe('<SS />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SS />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
