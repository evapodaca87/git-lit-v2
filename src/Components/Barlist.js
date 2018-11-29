import React from 'react'
import Bar from './Bar';


const BarList = ({ bars }) => {
    return (
        <div className='barList'>
            {bars.map(bar => <Bar key={bar.id} bar={bar}/>)}
        </div>
    )
}

export default BarList