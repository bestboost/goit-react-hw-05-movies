import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import fetchSearchMoviesAPI from './services/searchMovies-api';

const SearchMovies = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get('query' || ''); 

  useEffect(() => {
      if(!query) {
        return;
      };

      fetchSearchMoviesAPI
        .fetchSearchMovies(query)
    }, [query])

    function handleSubmit(e) {
       e.preventDefault();

      const movieIdValue = e.currentTarget;

      if (movieIdValue === '') {
        return setSearchParams({});
      }

      setSearchParams({ query: movieIdValue.elements.query.value });
      movieIdValue.reset();
  } 

return (
     <section>
          <form onSubmit={handleSubmit}>
            <input type="text" name="query"/>
            <button type="submit">search</button>
          </form>
     </section>
  )
}

export default SearchMovies;