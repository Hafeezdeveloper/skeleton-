import { Button, Grid,Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from '../comp/Cards'
import CircularProgress from '@mui/material/CircularProgress';
import Seleton from '../comp/Seleton'
import { Box } from '@mui/system'
// import Box from '@mui/material/Box';

const Product = () => {
   
    const [isOpen,setOpen] = useState(true)
    var [data,setData] = useState('')

    const nav = useNavigate()
    const [product,setproduct] = useState([])
    
    const DataHandle =()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((succ) => {
            setproduct(succ.data) 
            setOpen(false) } )
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        DataHandle()
     
    }, [])

    var setData = (e)=>{
        nav('/purchase',{
            state:e
        })
    }

    // console.log(data)
  return (
    <div> 
        {isOpen ?     (
            <Box sx={{ display:'flex',justifyContent:'center',height:'100vh',alignItems:'center'}}>


            <CircularProgress sx={{width:'250px', height:'220px' }} />
            </Box>
            
                // <Grid container spacing={1}> 
                //  {product.map( (value,i) =>{
                //      return(
                //              <Grid key={i} md={3} sm={4} xs={6}  item>
                //    <Seleton xxx={value}/>
                   
                //              </Grid>
                //          )
                //      })}
                //      </Grid>
                
                
            )  : (
            
                 <Grid container spacing={1}> 
                 {product.map( (value,i) =>{
                     return(
                             <Grid key={i} md={3} sm={4} xs={6}  item>
                                   <Cards getData={setData} data={value} />
                             </Grid>
                         )
                     })}
                     </Grid>
           
            )
       }
    </div>
  )
}

export default Product
