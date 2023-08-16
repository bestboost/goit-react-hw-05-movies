import { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";
import searchMoviesAPI from './services/searchMovies-api';

const MoviesList = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get('query' || ''); 
     const [title, setTitle] = useState([]);
     const [id, setId] = useState([]);
     // const [movies, setMovies] = useState(null);
           
  useEffect(() => {
      searchMoviesAPI
      .fetchSearchMovies(query)
        .then(response => response.results)
        .then(results => movieItems(results))
    }, [query])

    const movieItems = (results) => {
     setTitle(results.map(result => result.title))
     setId(results.map(result => result.id))
 };

return <div>
          <ul>
               {title.map((title, id) => 
                    <li key={id}>
                         <Link to={`/movies/${title}`}>
                         {title}</Link>
                    </li>                   
               )}
          </ul>
     </div>

}

export default MoviesList;

