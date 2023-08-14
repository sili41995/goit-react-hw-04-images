import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onLoadMoreBtnClick }) => (
  <LoadMoreBtn onClick={onLoadMoreBtnClick} type='button'>
    Load more
  </LoadMoreBtn>
);

Button.propTypes = {
  onLoadMoreBtnClick: PropTypes.func.isRequired,
};

export default Button;
