const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '35942187-b77c4f748861cf3ef2baf285c';

const fetchImages = (searchQuery, page) =>
  fetch(
    `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.hits.length) {
        throw new Error('Images not found');
      }
      return data;
    });

export default fetchImages;
