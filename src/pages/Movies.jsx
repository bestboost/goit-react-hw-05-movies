import SearchMovies from '../components/searchMovies/SearchMovies';
import MoviesList from '../components/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import searchMoviesAPI from '../components/services/movies-api';

const Movies = () => {
  const [searchParams] = useSearchParams();
  // const location = useLocation();
  const query = searchParams.get('query' || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    } else {
      if (query !== null) {
        searchMoviesAPI
          .fetchSearchMovies(query)
          .then(({ results }) => setMovies(results))
          .catch(error => setError(error));
      }
    }
  }, [query]);

  return (
    <main>
      <SearchMovies />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
