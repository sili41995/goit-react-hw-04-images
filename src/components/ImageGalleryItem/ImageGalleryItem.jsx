import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Image, Item } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  setModalWinState = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    const { showModal } = this.state;

    return (
      <>
        <Item onClick={this.setModalWinState}>
          <Image src={webformatURL} alt={tags} />
        </Item>
        {showModal && (
          <Modal
            largeImage={largeImageURL}
            tags={tags}
            setModalWinState={this.setModalWinState}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
