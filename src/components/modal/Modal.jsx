import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content">
          <button type="button" onClick={this.props.hideModal}>
            TOGGLE
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}
