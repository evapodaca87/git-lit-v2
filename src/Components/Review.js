import React from "react";
import { Header, Image, Icon, Rating } from 'semantic-ui-react';



const Review = ({review}) => {




    return (
      <div className='barReview'>
        <p>{review.username} </p>
        <p>{review.name}</p>
        <p> {review.comment} </p>
        <div>
          <i class='trash icon' />
          <Rating icon='star' defaultRating={review.stars} maxRating={5} />
          <i class='fire icon' />
        </div>
      </div>
    )

}

export default Review;