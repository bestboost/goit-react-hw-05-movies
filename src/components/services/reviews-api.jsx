import PropTypes from 'prop-types';

function fetchReviews(movieId) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU',
    },
  };

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

const api = {
  fetchReviews,
};

fetchReviews.propTypes = {
  movieId: PropTypes.string,
};

export default api;
