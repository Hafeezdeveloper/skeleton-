import { Skeleton } from '@mui/material'
import React from 'react'

const Seleton = ({xxx}) => {
    
  return (
    <div>
      <Skeleton   animation='wave' height={"100px"}  />  
      <img src={xxx.image} alt="" />
    </div>
  )
}

export default Seleton
