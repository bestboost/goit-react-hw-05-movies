import { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";

const Movies = () =>{
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' || ''); 
  const [titles, setTitles] = useState([]);
  const [ids, setIds] = useState([]);
           
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU'
      }
    };
    if(query === ''){
      return;
    }
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => response.results.map(result => result.title || result.name))
      .then(setTitles)
      .catch(err => console.error(err));
      
    }, [query, setSearchParams])

    const handleSubmit = e => {
      e.preventDefault();
      const movieIdValue = e.currentTarget;
      if(movieIdValue === '') {
        return setSearchParams({})
      }
      setSearchParams({query: movieIdValue.elements.query.value});
      movieIdValue.reset();
    };  

          return <div>
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="query"/>
                    <button type="submit">search</button>
                  </form>
                  {titles && <ul>
                    {titles.map( title => {
                     return(
                         <li key={title}>
                              <Link to={`/movies/${title}`}>{title}</Link>
                         </li>
                       )
                 })}
                  </ul>}
                 </div>
     };
     
export default Movies;