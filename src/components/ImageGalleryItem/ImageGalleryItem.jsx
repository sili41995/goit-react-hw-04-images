import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import css from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const { Item, Image } = css;

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal: prevStatus }) => ({ showModal: !prevStatus }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <Item>
        <Image
          src={webformatURL}
          alt={tags}
          onClick={() => this.toggleModal()}
        />
        {showModal && (
          <Modal
            link={largeImageURL}
            desc={tags}
            toggleModalWin={this.toggleModal}
          />
        )}
      </Item>
    );
  }
}

export default ImageGalleryItem;
