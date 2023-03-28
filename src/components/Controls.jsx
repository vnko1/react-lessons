import { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.handle}>
        {this.props.children}
      </button>
    );
  }
}

export default Controls;
