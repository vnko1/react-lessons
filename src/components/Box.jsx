import { Component } from 'react';
import Controls from './Controls';

class Box extends Component {
  state = {
    value: 0,
  };

  increment = () =>
    this.setState(prevState => ({ value: prevState.value + 1 }));

  decrement = () =>
    this.setState(prevState => ({ value: prevState.value - 1 }));

  render() {
    return (
      <>
        <div>{this.state.value}</div>
        <Controls handle={this.decrement}>-</Controls>
        <Controls handle={this.increment}>+</Controls>
      </>
    );
  }
}

export default Box;
