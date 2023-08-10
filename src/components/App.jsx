import {Routes, Route, NavLink} from "react-router-dom";
import styled from "styled-components";
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetailes from './pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;

const App = () => {
  return (
    <div
      style={{ margin: 20, fontSize: 40, color: '#010101'}}
    > 
       <nav>
        <StyledLink to="/">Home</StyledLink>
        <br/>
        <StyledLink to="/movies">Movies</StyledLink>
        <StyledLink to="/movies/:movieId">MovieDetailes</StyledLink>
       </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetailes />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;