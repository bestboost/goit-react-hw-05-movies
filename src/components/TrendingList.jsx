import { useState } from 'react';
import {Link, useSearchParams} from 'react-router-dom';

const TrendingList = () => {
     const [movies, setMovies] = useState([
          'movie-1',
          'movie-2',
          'movie-3',
          'movie-4',
          'movie-5'
     ]);
         //   useEffect(() => {
     //      HTTP request make, if you need
     //   }, [])
     

   return  <div>
              <h1>Trending List</h1>
               <ul>
                 {movies.map( movie => {
                     return(
                         <li key={movie}>
                              <Link to={`/movies/${movie}`}>{movie}</Link>
                         </li>
                       )
                 })}
               </ul>
           </div>
};

export default TrendingList;