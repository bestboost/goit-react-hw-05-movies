import PropTypes from 'prop-types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU',
  },
};

function fetchTrendingMovies() {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Something go wrong, please try again`);
  });
}

function fetchMovieDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something go wrong, please try again`));
  });
}

function fetchSearchMovies(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Ther is no movie with name ${query}`));
  });
}

function fetchCast(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something go wrong, please try again`));
  });
}

function fetchReviews(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`We don't have reviews for this movie`));
  });
}

const fetchProps = {
  fetchMovieDetails,
  fetchSearchMovies,
  fetchCast,
  fetchReviews,
};

fetchProps.propTypes = {
  movieId: PropTypes.string,
};

const api = {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchSearchMovies,
  fetchCast,
  fetchReviews,
};

export default api;
