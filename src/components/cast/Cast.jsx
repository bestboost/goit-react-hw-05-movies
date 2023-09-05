import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchCastAPI from '../services/cast-api';
import { List } from './cast.styled';
import pending from '../images/pending.png';
import PropTypes from 'prop-types';

const defaultImg = pending;

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const base_url = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    fetchCastAPI
      .fetchCast(movieId)
      .then(response => response.cast)
      .then(setCast)
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <section>
      {error && <p>{error}</p>}
      <ul>
        {cast.map(item => (
          <List key={item.id}>
            <img
              src={
                item.profile_path ? base_url + item.profile_path : defaultImg
              }
              alt="actor"
            />
            <p>{item.name}</p>
            <p>character: {item.character}</p>
          </List>
        ))}
      </ul>
    </section>
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
  error: PropTypes.object,
  movieId: PropTypes.string,
};

export default Cast;
