import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import fetchSearchMoviesAPI from './services/searchMovies-api';
import {Form, Button, Input} from './searchMovies.styled';

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
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="query"/>
            <Button type="submit">Search</Button>
          </Form>
     </section>
  )
}

export default SearchMovies;