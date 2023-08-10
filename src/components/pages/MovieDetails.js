import {Link, useParams, Outlet, useLocation} from "react-router-dom";

const MivieDetailes = () =>{
   const {movieId} = useParams();
   const location = useLocation(); 
   const backLink = location.state?.from ?? "/"; 
     
     //   useEffect(() => {
     //      HTTP request make, if you need
     //   }, [])
     
          return <div> <Link to={backLink}>Go back</Link>            
                  <br />
               MovieDetailes: {movieId}
                   <div> :-) detailes</div>
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
     
export default MivieDetailes;