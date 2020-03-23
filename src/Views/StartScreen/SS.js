import React from 'react';
import './SS.sass';

import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';

import animate from '../../Modules/animate';

const LoaderView = animate(Loader);

function animations(show, startingOver=false) {
  return {
    container: {
      animation: show ? '' : 'fadeOut',
      delay: show ? 0 : 1
    },
    
    header: {
      animation: !startingOver ? show ? 'bounceInDown' : 'bounceOutUp' : show ? '' : 'bounceOutUp',
    },

    content: {
      animation: show ? 'fadeIn' : 'fadeOut',
      delay: show ? 1 : 0
    },

    footer : {
      animation: !startingOver ? show ? 'fadeIn' : 'fadeOut' : show ? '' : 'fadeOut',
      delay: !startingOver ? show ? 1 : 0 : 0
    }
  }
}

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...animations(props.isVisible, props.startingOver)
    }
  }

  componentDidUpdate(props) {
    if (props.isVisible !== this.props.isVisible) {
      const show = props.isVisible;
      return animations(show);
    }
  }

  handleStart = () => {
    if (this.props.onStart()) {
      this.setState({
        ...animations(false)
      });
    }
  }

  render() {
    const {container, header, content, footer} = this.state;
    return (
      <section
        className={`intro animated ${container.animation}`}
        style={{animationDelay: `${container.delay}s`}}>
        <div className="wrapper">
          <Header
            className={`animated ${header.animation}`} />
          
          <article 
            className={`animated ${content.animation}`}
            style={{animationDelay: `${content.delay}s`}}>
            <p>
              Test your knowledge in a quiz on facts that no <em>normal people</em> would know about.
            </p>
            <Button onClick={this.handleStart}>Start Game!</Button>
          </article>

          <Footer
            className={`animated ${footer.animation}`}
            style={{animationDelay: `${footer.delay}s`}} />

          <LoaderView
            isVisible={this.props.isLoading}/>
        </div>
      </section>
    )
  }
}

export default StartScreen;