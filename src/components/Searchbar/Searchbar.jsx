import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <Button type='submit'>
          <FcSearch />
        </Button>
        <Input
          type='text'
          autoComplete='off'
          placeholder='Search images and photos'
          {...register('query')}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
