import PropTypes from 'prop-types';
import { Wrap } from './Container.styled';

const Container = ({ children }) => <Wrap>{children}</Wrap>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
