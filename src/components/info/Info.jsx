import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetailsAPI from '../services/movieDetailes-api';
import { InfoSection, Description, Image } from './info.styled';
import PropTypes from 'prop-types';

const Info = () => {
  const [detailes, setDetailes] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const base_url = `https://image.tmdb.org/t/p/w200`;
  const {
    poster_path,
    original_title,
    release_date,
    overview,
    vote_average,
    genres,
  } = detailes;

  useEffect(() => {
    fetchMovieDetailsAPI
      .fetchMovieDetails(movieId)
      .then(response => setDetailes(response))
      .catch(error => setError(error));
  }, [movieId, release_date]);

  return (
    <InfoSection>
      {error && <p>{error}</p>}
      {poster_path && <Image src={base_url + poster_path} alt="card" />}
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
