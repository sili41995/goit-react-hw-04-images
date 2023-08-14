import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from './Modal.styled';
import { createPortal } from 'react-dom';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hideModalWin);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModalWin);
  }

  hideModalWin = (e) => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.setModalWinState();
    }
  };

  render() {
    const { largeImage, tags } = this.props;

    return createPortal(
      <Backdrop onClick={this.hideModalWin}>
        <div>
          <img src={largeImage} alt={tags} />
        </div>
      </Backdrop>,
      document.querySelector('#modal-root')
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setModalWinState: PropTypes.func.isRequired,
};

export default Modal;
