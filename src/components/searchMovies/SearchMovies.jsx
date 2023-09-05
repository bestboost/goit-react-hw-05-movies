import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import fetchSearchMoviesAPI from '../services/searchMovies-api';
import { Form, Button, Input } from './searchMovies.styled';
import PropTypes from 'prop-types';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error] = useState(null);
  const query = searchParams.get('query' || '');

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }

  //   fetchSearchMoviesAPI
  //     .fetchSearchMovies(query)
  //     .catch(error => setError(error));
  // }, [query]);

  function handleSubmit(e) {
    e.preventDefault();

    const movieIdValue = e.currentTarget;

    if (movieIdValue === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: movieIdValue.elements.query.value });
    movieIdValue.reset();
  }

  return (
    <section>
      {error && <p>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Button type="submit">Search</Button>
      </Form>
      {query === '' && <p>Search bar is empty, please type movie name</p>}
    </section>
  );
};

SearchMovies.propTypes = {
  query: PropTypes.string,
  error: PropTypes.object,
};

export default SearchMovies;
