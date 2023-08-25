import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchReviewsAPI from '../services/reviews-api';
import { Author } from './reviews.styled';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsAPI
      .fetchReviews(movieId)
      .then(response => response.results)
      .then(setReviews)
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.map(rev => (
          <li key={rev.id}>
            <Author>Author: {rev.author} </Author>
            {rev.content}
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p>We don't have reviews for this movie</p>}
      {error && <h1>{error}</h1>}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
  error: PropTypes.object,
  movieId: PropTypes.string,
};

export default Reviews;
