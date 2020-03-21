import React from 'react';

export default function (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shouldRender: this.props.isVisible
      }
    }

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

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
};