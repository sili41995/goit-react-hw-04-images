class ImagesApiService {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  fetchImages() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35942187-b77c4f748861cf3ef2baf285c';

    const searchParams = new URLSearchParams({
      q: this.query,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      page: this.page,
      per_page: 12,
    });

    return fetch(`${BASE_URL}?${searchParams}`)
      .then((response) => response.json())
      .then((data) => {
        this.incrementPage();
        return data;
      })
      .catch((error) => {
        return error;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }
}

export default ImagesApiService;
