import {Link, Outlet, useLocation} from "react-router-dom";
import Info from '../Info';

const MovieDetailes = () =>{
   const location = useLocation(); 
   const backLink = location.state?.from ?? "/"; 

return <div> <Link to={backLink}>Go back</Link>            
               <div> 
                  <Info />
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