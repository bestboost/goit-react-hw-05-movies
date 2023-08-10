import { useParams } from "react-router-dom";

const Cast = () => {
     const {movieId} = useParams();
          //   useEffect(() => {
//      HTTP request make, if you need
//   }, [])

  return <div>Cast: {movieId}
          <ul>
               <li>1</li>
               <li>2</li>
          </ul>
         </div>
};

export default Cast;
