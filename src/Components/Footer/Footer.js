import React from 'react';
import './Footer.sass';

import {InlineShareButtons} from 'sharethis-reactjs';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={this.props.className}
        style={this.props.style}
        onAnimationEnd={this.props.onAnimationEnd}>
        <InlineShareButtons
          config={{
            alignment: 'center',
            enabled: true,
            networks: [
              'facebook',
              'twitter',
              'pinterest',
              'email',
              'sms'
            ],
            radius: 50,
            spacing: 8
          }} />
        <p>
          Designed & developed by <a target="_blank" rel="noopener noreferrer" href="https://malcolmkiano.com">Malcolm Kiano</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;