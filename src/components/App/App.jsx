import { Component } from 'react';
import ImagesApiService from 'services/images-api-service';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import css from 'components/App/App.styled';

const { Container, ErrorText } = css;

const imagesApiService = new ImagesApiService();

class App extends Component {
  state = {
    images: [],
    totalImages: null,
    status: 'idle',
    error: null,
  };

  onSubmit = async (value) => {
    try {
      this.setState({ status: 'pending', images: [] });
      const searchQuery = value.trim();
      imagesApiService.searchQuery = searchQuery;
      imagesApiService.resetPage();
      const response = await imagesApiService.fetchImages();
      const newImages = response.hits;
      if (!newImages.length) {
        throw new Error(`${imagesApiService.searchQuery} not found`);
      }
      const totalImages = response.totalHits;
      this.setState({
        images: [...newImages],
        totalImages,
        status: 'resolved',
      });
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  onLoadMore = async () => {
    this.setState({ status: 'pending' });
    const response = await imagesApiService.fetchImages();
    const images = response.hits;
    this.setState(({ images: prevImages }) => ({
      images: [...prevImages, ...images],
      status: 'resolved',
    }));
  };

  render() {
    const { status, images, totalImages, error } = this.state;

    if (status === 'idle') {
      return (
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
          {!!images.length && <ImageGallery items={images} />}
        </Container>
      );
    }

    if (status === 'pending') {
      return (
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
          {!!images.length && <ImageGallery items={images} />}
          <Loader />
        </Container>
      );
    }

    if (status === 'resolved') {
      return (
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
          {!!images.length && <ImageGallery items={images} />}
          {images.length !== totalImages && (
            <Button onBtnClick={this.onLoadMore} />
          )}
        </Container>
      );
    }

    if (status === 'rejected') {
      return (
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
          {!!images.length && <ImageGallery items={images} />}
          <ErrorText>{error}</ErrorText>
        </Container>
      );
    }

    //
    //
    //
  }
}

export default App;
