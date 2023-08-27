import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import searchMoviesAPI from './services/searchMovies-api';
import PropTypes from 'prop-types';

const MoviesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query' || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== null) {
      searchMoviesAPI
        .fetchSearchMovies(query)
        .then(response => response.results)
        .then(results => setMovies(results))
        .catch(error => setError(error));
    }
  }, [query]);

  return (
    <section>
      {error && <p>{error}</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

MoviesList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
  error: PropTypes.object,
};

export default MoviesList;
