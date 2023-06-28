import PropTypes from 'prop-types';
import css from 'components/Button/Button.styled';

const { Btn } = css;

const Button = ({ onBtnClick }) => {
  return (
    <Btn type='button' onClick={onBtnClick}>
      Load more
    </Btn>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
