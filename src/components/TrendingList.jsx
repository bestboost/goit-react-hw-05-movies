import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import trendingMovieAPI from './services/trendingMovies-api';
import PropTypes from 'prop-types';

const TrendingList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    trendingMovieAPI
      .fetchTrendingMovies()
      .then(response => response.results)
      .then(results => setMovies(results))
      .catch(error => setError(error));
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
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

TrendingList.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.object,
};

export default TrendingList;
