import React from 'react';
import './RS.sass';
import DataContext from '../../Context/DataContext';
import messages from '../../Modules/messages';

import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';

function animations(show) {
  return {
    container: {
      animation: show ? 'fadeIn' : 'nothing',
      delay: show ? 0.75 : 1
    },
    
    header: {
      animation: show ? 'bounceInDown' : '',
      delay: show ? 1 : 0
    },

    content: {
      animation: show ? 'fadeIn' : 'fadeOut',
      delay: show ? 2 : 0
    },

    footer: {
      animation: show ? 'fadeIn' : '',
      delay: show ? 2 : 0
    }
  }
}

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...animations(props.isVisible)
    }
  }

  static contextType = DataContext;

  componentDidMount() {
    const msg = messages.random('result', this.context.score, this.context.questions.length);
    this.setState({
      result: msg
    })
  }

  componentDidUpdate(props) {
    if (props.isVisible !== this.props.isVisible) {
      const show = props.isVisible;
      return animations(show);
    }
  }

  handlePlayAgain = () => {
    this.setState({
      ...animations(false),
    }, () => setTimeout(this.props.onPlayAgain, 500));
  }

  render() {
    const {container, header, content, footer} = this.state;
    
    return (
      <section
        className={`results animated ${container.animation}`}
        style={{animationDelay: `${container.delay}s`}} >

        <div className="wrapper">
          <Header
            className={`animated ${header.animation}`}
            style={{animationDelay: `${header.delay}s`}} />
          
          <article 
            className={`animated ${content.animation}`}
            style={{animationDelay: `${content.delay}s`}}>
            <div>
              <h2>Your Score</h2>
              <p className="score">
                {this.context.score}<span>/{this.context.questions.length}</span>
              </p>
              <p className="description">
                {this.state.result}
              </p>
            </div>
            <Button onClick={this.handlePlayAgain}>Play Again!</Button>
          </article>

          <Footer
            className={`animated ${footer.animation}`}
            style={{animationDelay: `${footer.delay}s`}} />
          
        </div>
      </section>
    )
  }
}

export default ResultScreen;