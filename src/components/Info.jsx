import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovieDetailsAPI from './services/movieDetailes-api';
import {InfoSection, Description} from './info.styled';

const Info = () =>{
    const [detailes, setDetailes] = useState([]);
    const {movieId} = useParams();
    const {poster_path, original_title, release_date, overview, vote_average, genres} = detailes;
    const base_url = `https://image.tmdb.org/t/p/w200`
    const ganre = genres?.map(g => g.name + ' ') 
    // 'https://api.themoviedb.org/3/movie/movie_id/images'
   
    useEffect(() => {
        fetchMovieDetailsAPI
       .fetchMovieDetails(movieId)
         .then(response => setDetailes(response))
      }, [movieId])
  
return <InfoSection> 
          <img src={base_url + poster_path} alt="card"/>
          <Description>
            <h2>{original_title}<span> ({release_date})</span></h2>
                <p>User score: {Math.trunc(vote_average * 10)}%</p>
            <h3>Overview</h3>
                <p>{overview}</p>
            <h3>Genres</h3>
                <p>{ganre}</p>
          </Description>      
      </InfoSection>
};

export default Info;