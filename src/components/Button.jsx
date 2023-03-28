import { Component } from 'react';

class Button extends Component {
  static defaultProps = { initialValue: 0 };
  // static propTypes = {};
  state = { value: this.props.initialValue };
  increment = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  decrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <>
        <div>{this.state.value}</div>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <button type="button" onClick={this.increment}>
          +
        </button>
      </>
    );
  }
}

export default Button;
