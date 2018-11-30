import React from 'react'
import { Rating } from 'semantic-ui-react'
import '../App.css'


const Bar = ({ bar }) => {
    return (
        <div className="barContainer">
                        <p className="barName"> {bar.props.name}</p>
                        <p> {bar.props.address} </p>
                        <p>{bar.props.openNow ? "Open" : "Closed"}</p>
                        <div className="rating">
                        <img className='tinyFire'src='/fire2.png'></img>
                        <Rating class="fire icon" defaultRating={Math.round(bar.props.rating)} maxRating={5} />
                    </div>
        </div>
    )
}

export default Bar