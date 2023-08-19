import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCastAPI from './services/cast-api';

const Cast = () => {
     const [cast, setCast] = useState([]);
     const {movieId} = useParams();
         
       useEffect(() => {
          fetchCastAPI
          .fetchCast(movieId)
          .then(response => response.cast)
          .then(setCast)
        
  }, [movieId])

  return <div>
               <ul>
                    {cast.map(c => 
                         <li key={c.id}>
                              <img src={c.poster_path} alt="actor"/> <br />
                              {c.name} <br/>
                              character: {c.character}
                         </li> 
                         )}          
               </ul>
         </div>
};

export default Cast;
