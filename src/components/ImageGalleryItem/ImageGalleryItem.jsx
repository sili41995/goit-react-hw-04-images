import { useState } from 'react';
import Modal from 'components/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const { Item, Image } = css;

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Item>
      <Image src={webformatURL} alt={tags} onClick={() => toggleModal()} />
      {showModal && (
        <Modal link={largeImageURL} desc={tags} toggleModal={toggleModal} />
      )}
    </Item>
  );
};

export default ImageGalleryItem;
