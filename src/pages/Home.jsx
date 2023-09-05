import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import trendingMovieAPI from '../components/services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    trendingMovieAPI
      .fetchTrendingMovies()
      .then(({ results }) => setMovies(results))
      .catch(error => setError(error));
  }, [setMovies]);

  return (
    <main>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
