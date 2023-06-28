import SearchForm from 'components/SearchForm';
import css from 'components/Searchbar/Searchbar.styled';

const { Container } = css;

const Searchbar = (props) => {
  return (
    <Container>
      <SearchForm {...props} />
    </Container>
  );
};

export default Searchbar;
