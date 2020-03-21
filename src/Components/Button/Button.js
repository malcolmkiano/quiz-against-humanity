import React from 'react';
import './Button.sass';

class Button extends React.Component {
  render() {
    return (
      <button autoFocus onClick={this.props.onClick} className={`btn ${this.props.type}`}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;