import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import SharedLayout from "./SharedLayout";

const Home = lazy(() => import ('../pages/Home'));
const Movies = lazy(() => import ('../pages/Movies'));
const MovieDetailes = lazy(() => import ('../pages/MovieDetails'));
const Info = lazy(() => import ('./Info'));
const Cast = lazy(() => import ('./Cast'));
const Reviews = lazy(() => import ('./Reviews'));

const App = () => {
  return (   
    <>  
     <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>  
  );
};

export default App;