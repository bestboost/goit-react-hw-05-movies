import {lazy, Suspense} from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import styled from "styled-components";
import SharedLayout from "./SharedLayout";
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetailes from '../pages/MovieDetails';
// import Info from './Info';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Home = lazy(() => import ('../pages/Home'));
const Movies = lazy(() => import ('../pages/Movies'));
const MovieDetailes = lazy(() => import ('../pages/MovieDetails'));
const Info = lazy(() => import ('./Info'));
const Cast = lazy(() => import ('./Cast'));
const Reviews = lazy(() => import ('./Reviews'));

// const StyledLink = styled(NavLink)`
//   display: flex;
//   color: black;
  
//   &.active {
//     color: orange;
//   }
// `;

const App = () => {
  return (
   
  <>
    
    {/* //   style={{ margin: 20, fontSize: 30, color: '#010101'}}
    // 
    //    <nav style={{display: 'flex'}}>
    //     <StyledLink to="/">Home</StyledLink>
    //     <StyledLink to="/movies">Movies</StyledLink>
    //    </nav> */}
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetailes />}>
        <Route path="info" element={<Info />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>
      </Routes>  
      </>  
  );
};

export default App;