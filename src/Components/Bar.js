import React from 'react'
import { Rating } from 'semantic-ui-react'
import '../App.css'


const Bar = ({ bar }) => {
    return (
        <div className="barContainer">
                      <p> {bar.props.name}</p>
                      <p> {bar.props.address} </p>
                      <p> {bar.props.rating} </p>
                      <div className="rating">
                        <i class="trash icon"></i>
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                        <i class="fire icon"></i>
                    </div>
        </div>
    )
}

export default Bar