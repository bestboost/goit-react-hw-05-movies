import { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

const TrendingList = () => {
     const location = useLocation();
     const [titles, setTitles] = useState([]);
           
     useEffect(() => {
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU'
              }
            };
            
            fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
              .then(response => response.json())
              .then(response => response.results.map(result => result.title || result.name))
              .then(setTitles)
              .catch(err => console.error(err));
       }, [])
     
   return  <div>
               <ul>
                 {titles.map(title => {
                     return(
                         <li key={title}>
                              <Link to={`/movies/${title}`} state={{from: location}}>{title}</Link>
                         </li>
                       )
                 })}
               </ul>
           </div>
};

export default TrendingList;