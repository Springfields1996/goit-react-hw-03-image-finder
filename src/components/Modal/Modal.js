import React from 'react';
import { Overlay, ModalStyle } from '../styles/style.module.css';

export class Modal extends React.Component {
  closeModalCheck = evt => {
    evt.target === evt.currentTarget && this.props.toggleModal();
  };

  render() {
    return (
      <div className={Overlay} onClick={this.closeModalCheck}>
        <div className={ModalStyle}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}
