import React from 'react'
import { useLocation } from 'react-router-dom'

const Purchase = () => {
    const location = useLocation()
    console.log(location)
    let {title,image,category,description} = location.state
  return (
    <div>
      i m Purchase
        <div>

       <img src={image} alt="" width={"250"}  /> <br />
      {category} <br />
        {description}

        </div>
    </div>
  )
}

export default Purchase
