import { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import trendingMovieAPI from './services/trendingMovies-api';

const TrendingList = () => {
     const location = useLocation();
     const[movies, setMovies] = useState([]);

     useEffect(() => {        
        trendingMovieAPI
        .fetchTrendingMovies()
        .then(response => response.results)
        .then(results => setMovies(results))
       }, []);

   return  <div>
              <ul>
                 {movies.map(movie =>          
                      <li key={movie.id}>
                          <Link to={`/movies/${movie.id}`} 
                                state={{from: location}}>
                            {movie.title}</Link>
                      </li>                       
                   )}
               </ul>
           </div>
};

export default TrendingList;