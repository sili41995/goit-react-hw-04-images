import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map((img) => (
        <ImageGalleryItem key={img.id} image={img} />
      ))}
    </List>
  );
};

ImageGallery.propTyps = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ImageGallery;
