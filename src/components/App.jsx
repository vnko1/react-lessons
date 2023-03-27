import React, { Component } from 'react';
import { Modal } from './modal/Modal';

export class App extends Component {
  state = { showModal: false };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    return (
      <div>
        {this.state.showModal && <Modal hideModal={this.toggleModal} />}
        <button type="button" onClick={this.toggleModal}>
          TOGGLE
        </button>
      </div>
    );
  }
}
