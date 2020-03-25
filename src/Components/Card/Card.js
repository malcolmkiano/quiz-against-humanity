import React from 'react';
import './Card.sass';

class Card extends React.Component {
  render() {

    // grab necessary values from props
    const {animation, delay, text, type, onClick} = this.props;

    // uses a <p> tag if type is question
    // otherwise use an <li> tag
    const Tag = type === 'question' ? 'p' : 'li';

    return (
      <Tag
        className={`card animated ${animation} card-${type}`}
        style={{animationDelay: `${delay}s`}}>
        {type === 'question' ? (
          <span>{text}</span>
        ) : (
          <button onClick={() => onClick(text)}><span>{text}</span></button>
        )}
      </Tag>
    )
  }
}

export default Card;