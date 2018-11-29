import React from 'react'
import Bar from './Bar';


const BarList = ({ bars }) => {
    return (
        <div>
            {bars.map(bar => <Bar key={bar.id} bar={bar}/>)}
        </div>
    )
}

export default BarList