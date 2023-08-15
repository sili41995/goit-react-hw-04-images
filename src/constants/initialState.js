import statuses from './statuses';

const initialState = {
  searchQuery: '',
  page: 1,
  images: [],
  totalImages: null,
  status: statuses.idle,
};

export default initialState;
