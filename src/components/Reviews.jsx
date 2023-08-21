import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchReviewsAPI from './services/reviews-api';
import {Author} from './reviews.styled';

const Reviews = () => {
     const [reviews, setReviews] = useState([]);
     const {movieId} = useParams();

       useEffect(() => {
          fetchReviewsAPI
           .fetchReviews(movieId)
           .then(response => response.results)
           .then(setReviews)
  }, [movieId])

  return <section>
           <ul>
             {reviews.map(rev =>
               <li key={rev.id}>
                   <Author>Author: {rev.author} </Author> 
                   {rev.content}
               </li>
               )}
          </ul>
        </section>
};

export default Reviews;