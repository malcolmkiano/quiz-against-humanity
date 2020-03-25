import React from 'react';
import './Loader.sass'

class Loader extends React.Component {
  render() {

    // conditional class if loading is complete
    // (isVisible would equal to true)
    const hidden = !this.props.isVisible ? 'hidden' : '';

    return (
      <div
        className={`loader animated ${hidden}`}
        onAnimationEnd={this.props.onDismount}></div>
    );
  }
}

export default Loader;