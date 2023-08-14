import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from './Modal.styled';

export const Modal = ({ largeImage, tags, setModalWinState }) => {
  useEffect(() => {
    const hideModalWin = (e) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);

    return () => {
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState]);

  const hideModalWin = (e) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

  return createPortal(
    <Backdrop onClick={hideModalWin}>
      <div>
        <img src={largeImage} alt={tags} />
      </div>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setModalWinState: PropTypes.func.isRequired,
};

export default Modal;
