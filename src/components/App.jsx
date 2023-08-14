import React, { useEffect, useState } from 'react';
import fetchImages from 'service/fetchImages';
import statuses from 'constants/statuses';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Container from 'components/Container';
import Notification from 'components/Notification';
import { errorToast, successToast } from 'utils/toasts';
import initialState from 'constants/initialState';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [totalImages, setTotalImages] = useState(null);
  const [status, setStatuses] = useState();

  useEffect(() => {
    error && errorToast(error);
  }, [error]);

  useEffect(() => {
    async function getImages(searchQuery, page) {
      try {
        setStatuses(statuses.pending);
        const { hits: newImages, totalHits } = await fetchImages(
          searchQuery,
          page
        );
        setImages((prevState) => [...prevState, ...newImages]);
        setTotalImages(totalHits);
        setStatuses(statuses.resolved);
        successToast('Images uploaded');
      } catch (error) {
        setError(error.message);
        setStatuses(statuses.rejected);
      }
    }

    searchQuery && getImages(searchQuery, page);
  }, [page, searchQuery]);

  const lastPage = totalImages === images.length;

  const onLoadMoreBtnClick = () => {
    setPage((prevState) => prevState + 1);
  };

  const onSubmitForm = ({ query }) => {
    if (!query.trim()) {
      errorToast('Please, enter search query!');
      return;
    }
    setSearchQuery(query);
    setPage(initialState.page);
    setImages(initialState.images);
    setError(initialState.error);
    setTotalImages(initialState.totalImages);
    setStatuses(initialState.status);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmitForm} />
      <Container>
        {!!images.length && <ImageGallery images={images} />}
        {status === statuses.pending && <Loader />}
        {!!images.length &&
          (status === statuses.resolved || status === statuses.rejected) &&
          !lastPage && <Button onLoadMoreBtnClick={onLoadMoreBtnClick} />}
      </Container>
      <Notification />
    </>
  );
};

export default App;
