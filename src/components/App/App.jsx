import { useState } from 'react';
import ImagesApiService from 'services/images-api-service';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import css from 'components/App/App.styled';

const { Container, ErrorText } = css;

const imagesApiService = new ImagesApiService();

const statuses = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
};

const initialState = {
  images: [],
  totalImages: null,
  status: statuses.idle,
  error: null,
};

const App = () => {
  const [images, setImages] = useState(() => initialState.images);
  const [totalImages, setTotalImages] = useState(
    () => initialState.totalImages
  );
  const [status, setStatus] = useState(() => initialState.status);
  const [error, setError] = useState(() => initialState.error);

  const onSubmit = async (value) => {
    try {
      setStatus(statuses.pending);
      setImages(initialState.images);
      const searchQuery = value.trim();
      imagesApiService.searchQuery = searchQuery;
      imagesApiService.resetPage();
      const response = await imagesApiService.fetchImages();
      const newImages = response.hits;
      if (!newImages.length) {
        throw new Error(`${imagesApiService.searchQuery} not found`);
      }
      const totalImages = response.totalHits;
      setImages(newImages);
      setTotalImages(totalImages);
      setStatus(statuses.resolved);
    } catch (error) {
      setError(error.message);
      setStatus(statuses.rejected);
    }
  };

  const onLoadMore = async () => {
    setStatus(statuses.pending);
    const response = await imagesApiService.fetchImages();
    const images = response.hits;
    setImages((prevState) => [...prevState, ...images]);
    setStatus(statuses.resolved);
  };

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      {!!images.length && <ImageGallery items={images} />}
      {status !== statuses.idle &&
        status !== statuses.pending &&
        images.length !== totalImages && <Button onBtnClick={onLoadMore} />}
      {status === statuses.pending && <Loader />}
      {status === statuses.rejected && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default App;
