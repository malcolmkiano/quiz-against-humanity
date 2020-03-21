import React from 'react';
import './Footer.sass';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={this.props.className}
        style={this.props.style}
        onAnimationEnd={this.props.onAnimationEnd}>
        <div className="links sharethis-inline-share-buttons"></div>
        <p>
          Designed & developed by <a target="_blank" rel="noopener noreferrer" href="https://malcolmkiano.com">Malcolm Kiano</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;