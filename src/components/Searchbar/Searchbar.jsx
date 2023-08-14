import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
        <SearchForm>
          <Button type='submit'>
            <FcSearch />
          </Button>
          <Input
            name='query'
            type='text'
            autoComplete='off'
            placeholder='Search images and photos'
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
