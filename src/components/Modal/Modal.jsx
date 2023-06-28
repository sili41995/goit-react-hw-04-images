import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.styled';

const { Overlay, ModalWin, Image } = css;

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    toggleModalWin: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = (e) => {
    if (e.code === 'Escape') {
      this.props.toggleModalWin();
    }
  };

  closeModalWin = (e) => {
    const { toggleModalWin } = this.props;

    if (e.target === e.currentTarget) {
      toggleModalWin();
    }
  };

  onEscapePress = (e) => {
    const { toggleModalWin } = this.props;
    if (e.target === e.currentTarget || e.keyCode === 'Escape') {
      toggleModalWin();
    }
  };

  render() {
    const { link, desc } = this.props;

    return createPortal(
      <Overlay
        onClick={(e) => {
          this.closeModalWin(e);
        }}
      >
        <ModalWin>
          <Image src={link} alt={desc} />
        </ModalWin>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
