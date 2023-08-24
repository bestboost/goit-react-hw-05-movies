import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCastAPI from './services/cast-api';
import {List} from './cast.styled';

const Cast = () => {
     const [cast, setCast] = useState([]);
     const { movieId } = useParams();
     const[error, setError] = useState(null);
     const base_url = 'https://image.tmdb.org/t/p/w200'
         
       useEffect(() => {
          fetchCastAPI
          .fetchCast(movieId)
          .then(response => response.cast)
             .then(setCast)
             .catch(error => setError(error));
  }, [movieId])

   return <section>
              <ul>
                 {cast.map(c => 
                    <List key={c.id}>
                        <img src={base_url + c.profile_path} alt="actor"/> <br />
                         {c.name} <br/>
                         character: {c.character}
                    </List> 
                    )}          
               </ul>
         </section>
};

export default Cast;
