import {Link, useParams, Outlet} from "react-router-dom";

const MivieDetailes = () =>{
   const {movieId} = useParams();  
     
     //   useEffect(() => {
     //      HTTP request make, if you need
     //   }, [])
     
          return <div>
                  <button type="button">Go back</button>
                  <br />
               MovieDetailes:{movieId}
               {/* <Link to={}>Go back</Link> */}
          
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