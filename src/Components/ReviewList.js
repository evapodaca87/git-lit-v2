import React from "react";
import { Header, Image, Icon, Rating } from 'semantic-ui-react';
import Review from './Review'



const ReviewList = ({reviewList}) => {

    console.log(reviewList)

  return(
    <div className='profileBarReview'>
        {reviewList.map(review => <Review review={review}/>) }
    </div>
  )
}

export default ReviewList;