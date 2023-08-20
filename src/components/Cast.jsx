import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCastAPI from './services/cast-api';

const Cast = () => {
     const [cast, setCast] = useState([]);
     const {movieId} = useParams();
     const base_url = 'https://image.tmdb.org/t/p/w500'
         
       useEffect(() => {
          fetchCastAPI
          .fetchCast(movieId)
          .then(response => response.cast)
          .then(setCast)
        
  }, [movieId])

   return <section>
              <ul>
                 {cast.map(c => 
                    <li key={c.id}>
                        <img src={base_url + c.profile_path} alt="actor"/> <br />
                         {c.name} <br/>
                         character: {c.character}
                    </li> 
                    )}          
               </ul>
         </section>
};

export default Cast;
