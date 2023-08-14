import statuses from './statuses';

const initialState = {
  searchQuery: '',
  page: 1,
  images: [],
  error: null,
  totalImages: null,
  status: statuses.idle,
};

export default initialState;
