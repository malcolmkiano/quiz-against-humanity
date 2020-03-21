import React from 'react';
import './Card.sass';

class Card extends React.Component {
  render() {
    const {animation, delay, text, type, onClick} = this.props;
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