import { useParams } from "react-router-dom";

const Reviews = () => {
     const {movieId} = useParams();
          //   useEffect(() => {
//      HTTP request make, if you need
//   }, [])

  return <div>Reviews: 
     {movieId}
           <p>reviews</p>
           <ul>
               <li>1</li>
               <li>2</li>
          </ul>
        </div>
};

export default Reviews;