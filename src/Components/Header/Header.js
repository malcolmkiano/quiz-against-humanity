import React from 'react';
import './Header.sass';

class Header extends React.Component {
  render() {
    return (
      <header
        className={this.props.className}
        style={this.props.style} >
        <h1>
          <span>Quiz</span>
          <span>Against</span>
          <span>Humanity.</span>
        </h1>
        <p className="subtitle">
          <span>A trivia game</span>
          <span>for weird people.</span>
        </p>
      </header>
    );
  }
}

export default Header;