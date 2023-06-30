import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from 'components/Modal/Modal.styled';

const { Overlay, ModalWin, Image } = css;

const modalRoot = document.getElementById('modal-root');

const Modal = ({ link, desc, toggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscPress);

    function onEscPress(e) {
      console.log(e.code);
      if (e.code === 'Escape') {
        toggleModal();
      }
    }

    return () => window.removeEventListener('keydown', onEscPress);
  }, [toggleModal]);

  function closeModalWin(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }

  return createPortal(
    <Overlay
      onClick={(e) => {
        closeModalWin(e);
      }}
    >
      <ModalWin>
        <Image src={link} alt={desc} />
      </ModalWin>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
