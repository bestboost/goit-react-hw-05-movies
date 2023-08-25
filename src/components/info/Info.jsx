import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetailsAPI from '../services/movieDetailes-api';
import { InfoSection, Description, Image } from './info.styled';
import PropTypes from 'prop-types';

const Info = () => {
  const [detailes, setDetailes] = useState([]);
  const [error, setError] = useState(null);
  const {
    poster_path,
    original_title,
    release_date,
    overview,
    vote_average,
    genres,
  } = detailes;
  const { movieId } = useParams();
  const base_url = `https://image.tmdb.org/t/p/w200`;
  const ganre = genres?.map(g => g.name + ' ');

  useEffect(() => {
    fetchMovieDetailsAPI
      .fetchMovieDetails(movieId)
      .then(response => setDetailes(response))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <InfoSection>
      <Image src={base_url + poster_path} alt="card" />
      <Description>
        <h2>
          {original_title} ({release_date})
        </h2>
        <p>User score: {Math.trunc(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{ganre}</p>
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