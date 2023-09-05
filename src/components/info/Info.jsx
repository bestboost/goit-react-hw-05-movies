import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetailsAPI from '../services/movies-api';
import { InfoSection, Description, Image } from './info.styled';
import pending from '../images/pending.png';
import PropTypes from 'prop-types';

const defaultImg = pending;

const Info = () => {
  const [detailes, setDetailes] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const base_url = `https://image.tmdb.org/t/p/w200`;

  useEffect(() => {
    fetchMovieDetailsAPI
      .fetchMovieDetails(movieId)
      .then(response => setDetailes(response))
      .catch(error => setError(error));
  }, [movieId]);

  if (!detailes) {
    return;
  }

  const {
    poster_path,
    original_title,
    release_date,
    overview,
    vote_average,
    genres,
  } = detailes;

  return (
    <InfoSection>
      {error && <p>{error}</p>}
      <Image
        src={poster_path ? base_url + poster_path : defaultImg}
        alt="card"
      />
      <Description>
        <h2>
          {original_title} ({release_date && release_date.slice(0, 4)})
        </h2>
        <p>User score: {Math.trunc(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(g => g.name + ' ')}</p>
      </Description>
    </InfoSection>
  );
};

Info.propTypes = {
  detailes: PropTypes.array,
  error: PropTypes.object,
  movieId: PropTypes.string,
};

export default Info;
