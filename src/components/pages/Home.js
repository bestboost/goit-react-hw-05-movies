import { useState, useEffect } from "react";
import TrendingList from "components/TrendingList";

const Home = () =>{
     const [movies, setMovies] = useState([]);

       useEffect(() => {
          const options = {
               method: 'GET',
               headers: {
                 accept: 'application/json',
                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU'
               }
             };
             
             fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
               .then(response => response.json())
               .then(response => response.results.map(resalt => resalt.title))
               .catch(err => console.error(err));
       }, [])
     
          return <div>
                   <h1>Trending today</h1>
                   <TrendingList movies={movies}/>
                 </div>
     };
     
export default Home;