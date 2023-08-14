import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const { webformatURL, largeImageURL, tags } = image;

  const setModalWinState = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Item onClick={setModalWinState}>
        <Image src={webformatURL} alt={tags} />
      </Item>
      {showModal && (
        <Modal
          largeImage={largeImageURL}
          tags={tags}
          setModalWinState={setModalWinState}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
