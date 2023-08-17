import {Routes, Route, NavLink} from "react-router-dom";
import styled from "styled-components";
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetailes from '../pages/MovieDetails';
import Info from './Info';
import Cast from './Cast';
import Reviews from './Reviews';

const StyledLink = styled(NavLink)`
  display: flex;
  color: black;
  
  &.active {
    color: orange;
  }
`;

const App = () => {
  return (
    <div
      style={{ margin: 20, fontSize: 30, color: '#010101'}}
    > 
       <nav style={{display: 'flex'}}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
       </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetailes />}>
        <Route path="info" element={<Info />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;