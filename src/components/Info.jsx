import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovieDetailsAPI from './services/movieDetailes-api';

const Info = () =>{
    const [detailes, setDetailes] = useState([]);
    const {movieId} = useParams();
          
           
    useEffect(() => {
        fetchMovieDetailsAPI
       .fetchMovieDetails(movieId)
         .then(response => setDetailes(response))
      }, [movieId])
  
// const getProductById = (productId) => {
//      return products.find((product) => product.id === productId);
//    };
const {poster_path, original_title, release_date, overview, vote_average, genres} = detailes;


return <div> 
          <img src={poster_path} alt="card"/>
          <h1>{original_title}<span> ({release_date})</span></h1>
              <p>User score: {Math.trunc(vote_average * 10)}%</p>
          <h2>Overview</h2>
              <p>{overview}</p>
          <h2>Genres</h2>
          {/* {genres.map(genre =>
              <p>{Object.values(genre.name)}</p>
              )} */}
      </div>
};

export default Info;