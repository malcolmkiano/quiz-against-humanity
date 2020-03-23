import React from 'react';
import './Loader.sass'

class Loader extends React.Component {
  render() {
    const hidden = !this.props.isVisible ? 'hidden' : '';
    return (
      <div
        className={`loader animated ${hidden}`}
        onAnimationEnd={this.props.onDismount}></div>
    );
  }
}

export default Loader;