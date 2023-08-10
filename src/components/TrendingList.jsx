// import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

const TrendingList = ({movies}) => {

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