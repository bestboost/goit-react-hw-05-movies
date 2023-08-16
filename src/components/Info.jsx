import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const Info = () =>{
   const {movieId} = useParams();

   useEffect(() => {



}, [movieId])

return <div> 
          {/* <img alt="card">:)</img> */}
          <h1>{movieId}<span> (year)</span></h1>
              <p>User score: 00%</p>
          <h2>Overview</h2>
              <p>loremefesfedsfdasf
               safdsfdsfdsfasd
               dfdsfdsfdsfdsfd
              </p>
          <h2>ganres</h2>
              <p>dgfdsgf fdsgdfg</p>
      </div>
};

export default Info;