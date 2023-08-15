import { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import trendingMovieAPI from './services/trendingMovies-api';

const TrendingList = () => {
     const location = useLocation();
     const [title, setTitle] = useState([]);
     const [id, setId] = useState([]);

     useEffect(() => {        
        trendingMovieAPI
        .fetchTrendingMovies()
        .then(response => response.results)
        .then(results => movieItems(results))
       }, []);


       const movieItems = (results) => {
            setTitle(results.map(result => result.title))
            setId(results.map(result => result.id))
        };
        
   return  <div>
              <ul>
                 {title.map((title, id) =>          
                      <li key={id}>
                          <Link to={`/movies/${title}`} 
                                state={{from: location}}>
                            {title}</Link>
                      </li>                       
                   )}
               </ul>
           </div>
};

export default TrendingList;