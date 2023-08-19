import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovieDetailsAPI from './services/movieDetailes-api';

const Info = () =>{
    const [detailes, setDetailes] = useState([]);
    const {movieId} = useParams();
    const {poster_path, original_title, release_date, overview, vote_average, genres} = detailes;
    const base_url = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const ganre = genres.map(g => g.name + ' ') 
   
    useEffect(() => {
        fetchMovieDetailsAPI
       .fetchMovieDetails(movieId)
         .then(response => setDetailes(response))
      }, [movieId])
  
return <div> 
          <img src={base_url} alt="card"/>
          <h1>{original_title}<span> ({release_date})</span></h1>
              <p>User score: {Math.trunc(vote_average * 10)}%</p>
          <h2>Overview</h2>
              <p>{overview}</p>
          <h2>Genres</h2>
          <p>{ganre}</p>
       
      </div>
};

export default Info;