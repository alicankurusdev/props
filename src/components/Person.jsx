import React from 'react'
import "./Person.css"
import Msg from './Msg'


const Person = ({name, img, tel}) => {
  return (
    <div className='person'>
        <div className="img-cont">
            <img src={img} alt="" />
        </div>
        <div className="info">
            <Msg name={name}/>
            <p>{tel}</p>
        </div>


    </div>
  )
}

export default Person