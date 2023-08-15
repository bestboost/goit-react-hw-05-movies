import { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";
import fetchSearchMoviesAPI from './services/searchMovies-api';

const MoviesList = ({query}) => {
     // const [searchParams, setSearchParams] = useSearchParams();
     // const query = searchParams.get('query' || ''); 
     const [title, setTitle] = useState([]);
     const [id, setId] = useState([]);
     // const [movies, setMovies] = useState(null);
           
  useEffect(() => {
      if(!query) {
        return;
      };

      fetchSearchMoviesAPI
        .fetchSearchMovies(query)
        .then(response => console.log(response.results))
        .then(results => movieItems(results))
    }, [query])

    const movieItems = (results) => {
     setTitle(results.map(result => result.title))
     setId(results.map(result => result.id))
 };

return (
    <div>
          <ul>
               {title.map( title => {
               return(
                    <li key={id}>
                         <Link to={`/movies/${title}`}>{title}</Link>
                    </li>
                    )
               })}
          </ul>
     </div>
)
}

export default MoviesList;

