import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

const TrendingList = () => {
     const [movies, setMovies] = useState([
          'movie-1',
          'movie-2',
          'movie-3',
          'movie-4',
          'movie-5'
     ]);
     const location = useLocation();
         //   useEffect(() => {
     //      HTTP request make, if you need
     //   }, [])
     

   return  <div>
               <ul>
                 {movies.map( movie => {
                     return(
                         <li key={movie}>
                              <Link to={`/movies/${movie}`} state={{from: location}}>{movie}</Link>
                         </li>
                       )
                 })}
               </ul>
           </div>
};

export default TrendingList;