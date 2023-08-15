import { useState, useEffect } from "react";
import {Link, useParams, Outlet, useLocation} from "react-router-dom";

const MovieDetailes = () =>{
   const {movieId} = useParams();
   const location = useLocation(); 
   const backLink = location.state?.from ?? "/"; 
//    const [results, setResults] = useState();

   useEffect(() => {
     const options = {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU'
       }
     };
     
     fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
       .then(response => response.json())
       .then(response => response.results)
     //   .setResults()
       .catch(err => console.error(err));
}, [])

return <div> <Link to={backLink}>Go back</Link>            
               <br />
          MovieDetailes: {movieId}
               <div> 
               {/* <img alt="card">:)</img> */}
               <h1>title<span> (year)</span></h1>
               <p>User score: 00%</p>
               <h2>Overview</h2>
               <p>loremefesfedsfdasf
                    safdsfdsfdsfasd
                    dfdsfdsfdsfdsfd
               </p>
               <h2>ganres</h2>
               <p>dgfdsgf fdsgdfg</p>
               </div>
               <ul>
               <h6>Additional information</h6>
                    <li>
                         <Link to={"cast"}>Cast</Link>
                    </li>
                    <li>
                         <Link to={"reviews"}>Reviews</Link>
                    </li>
               </ul>
          <Outlet />
     </div>
     };
     
export default MovieDetailes;