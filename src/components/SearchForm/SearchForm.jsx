import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import css from 'components/SearchForm/SearchForm.styled';

const { Button, Label } = css;

const schema = yup.object({
  searchQuery: yup.string().trim().required(),
});

const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        searchQuery: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContainer>
        <Button type='submit'>
          <Label>Search</Label>
          <FcSearch />
        </Button>

        <Input
          type='text'
          name='searchQuery'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
      </FormContainer>
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
