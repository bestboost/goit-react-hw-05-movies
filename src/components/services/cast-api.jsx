import PropTypes from 'prop-types';

function fetchCast(movieId) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU',
    },
  };

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

const api = {
  fetchCast,
};

fetchCast.propTypes = {
  movieId: PropTypes.string,
};

export default api;
