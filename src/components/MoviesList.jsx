import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <section>
      {/* {error && <p>{error}</p>} */}
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
