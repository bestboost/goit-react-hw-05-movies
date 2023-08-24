import { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";
import searchMoviesAPI from './services/searchMovies-api';

const MoviesList = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get('query' || ''); 
     const [movies, setMovies] = useState([]);
     const[error, setError] = useState(null);
           
  useEffect(() => {
    if(query !== null){
     searchMoviesAPI
     .fetchSearchMovies(query)
       .then(response => response.results)
       .then(results => setMovies(results))
       .catch(error => setError(error));
    }
    }, [query])

return <section>
          <ul>
               {movies.map(movie => 
                    <li key={movie.id}>
                         <Link to={`/movies/${movie.id}`}>
                         {movie.title}</Link>
                    </li>                   
               )}
          </ul>
     </section>

}

export default MoviesList;

