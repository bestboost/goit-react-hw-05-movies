import { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";

const Movies = (state) =>{
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');
  
       useEffect(() => {
     //      HTTP request make, if you need
 
    }, [query])
    //  const updateQueryString = evt => {
    //   const movieIdValue = evt.target.value;
    //     if(movieIdValue === '') {
    //       return setSearchParams({})
    //     }
    //     setSearchParams({movieId: movieIdValue});
    //  };
       
    const handlesubmit = e => {
      e.preventDefault();
      const movieIdValue = e.currentTarget;
      setSearchParams({query: movieIdValue.elements.query.value});
      movieIdValue.reset();
    };  

          return <div>
                  <form onSubmit={handlesubmit}>
                    <input type="text" name="query"/>
                    <button type="submit">search</button>
                  </form>
                  {movies && <ul>
                    {movies.map( movie => {
                     return(
                         <li key={movie}>
                              <Link to={`/movies/${movie}`}>{movie}</Link>
                         </li>
                       )
                 })}
                  </ul>}
                 </div>
     };
     
export default Movies;