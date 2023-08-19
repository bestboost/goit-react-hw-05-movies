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
// const {profile_path} = cast
// console.log("Cast  profile_path:", cast.profile_path)
// const profilePhoto = cast.map(cast => cast.profile_path)
// console.log("Cast  profilePhoto:", profilePhoto)
// const base_url = `https://image.tmdb.org/t/p/w500/${profilePhoto}`
   
//    console.log("Cast  base_url:", base_url)
   return <div>
              <ul>
                 {cast.map(c => 
                    <li key={c.id}>
                         <img src="" alt="actor"/> <br />
                         {c.name} <br/>
                         character: {c.character}
                    </li> 
                    )}          
               </ul>
         </div>
};

export default Cast;
