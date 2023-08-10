import { useState } from "react";
import TrendingList from "components/TrendingList";

const Home = () =>{
     const [movies, setMovies] = useState([
          'movie-1',
          'movie-2',
          'movie-3',
          'movie-4',
          'movie-5'
     ]);
     //   useEffect(() => {
     //      HTTP request make, if you need
     //   }, [])
     
          return <div>
                   <h1>Trending today</h1>
                   <TrendingList movies={movies}/>
                 </div>
     };
     
     export default Home;