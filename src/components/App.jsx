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
  const [searchQuery, setSearchQuery] = useState(
    () => initialState.searchQuery
  );
  const [page, setPage] = useState(() => initialState.page);
  const [images, setImages] = useState(() => initialState.images);
  const [, setError] = useState(() => initialState.error);
  const [totalImages, setTotalImages] = useState(
    () => initialState.totalImages
  );
  const [status, setStatuses] = useState(() => initialState.status);
  const imagesLength = images.length;

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
      } catch ({ message }) {
        setError(message);
        errorToast(message);
        setStatuses(statuses.rejected);
      }
    }

    searchQuery && getImages(searchQuery, page);
  }, [page, searchQuery]);

  const onLoadMoreBtnClick = () => {
    setPage((prevState) => prevState + 1);
  };

  const onSubmitForm = ({ query }) => {
    const { page, images, error, totalImages, status } = initialState;
    if (!query.trim()) {
      errorToast('Please, enter search query!');
      return;
    }
    setSearchQuery(query);
    setPage(page);
    setImages(images);
    setError(error);
    setTotalImages(totalImages);
    setStatuses(status);
  };

  const lastPage = totalImages === imagesLength;
  const { pending, resolved, rejected } = statuses;

  return (
    <>
      <Searchbar onSubmit={onSubmitForm} />
      <Container>
        {!!imagesLength && <ImageGallery images={images} />}
        {status === pending && <Loader />}
        {!!imagesLength &&
          (status === resolved || status === rejected) &&
          !lastPage && <Button onLoadMoreBtnClick={onLoadMoreBtnClick} />}
      </Container>
      <Notification />
    </>
  );
};

export default App;
