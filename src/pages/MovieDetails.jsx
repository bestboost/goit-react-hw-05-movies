import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Info from '../components/info/Info';
import { Box, GoBackButton } from './movieDetailes.styled';

const MovieDetailes = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <Box>
      <Link to={backLink}>
        <GoBackButton> Go back</GoBackButton>
      </Link>
      <div>
        <Info />
      </div>
      <ul>
        <h4>Additional information</h4>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetailes;
