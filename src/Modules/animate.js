import React from 'react';

/**
 * wraps components and delays unmounting to allow entry/exit animations
 * @param {Component} Component component to animate
 */
export default function (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shouldRender: this.props.isVisible
      }
    }

    // delay the dismount by 1 second after component should be hidden
    componentDidUpdate(oldProps) {
      if (!oldProps.isVisible && this.props.isVisible){
        this.setState({ shouldRender: true });
      } else if (oldProps.isVisible && !this.props.isVisible){
        setTimeout(
          () => this.setState({ shouldRender: false }),
          1000
        );
      }
    }

    // conditionally render child component if state.shouldRender is true
    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
};