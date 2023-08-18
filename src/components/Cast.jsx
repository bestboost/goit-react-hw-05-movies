import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCastAPI from './services/cast-api';

const Cast = () => {
     const [cast, setCast] = useState([]);
     const {movieId} = useParams();
         
//        useEffect(() => {
//           fetchCastAPI
//           .fetchCast(movieId)
//           .then(response => console.log(response))
      
//   }, [movieId])

  return <div>Cast: {movieId}
          <ul>
               <li>1</li>
               <li>2</li>
          </ul>
         </div>
};

export default Cast;
