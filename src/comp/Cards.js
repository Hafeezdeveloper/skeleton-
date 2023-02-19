// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

 function Cards({getData,data}) {
    
    //  console.log(getData)
  return (  
    <Card  onClick={() => getData(data)} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
    
        <Button variant='contained'  > <LocalGroceryStoreIcon sx={{size:{md:'large',sm:'large',xs:'small'}}}  /> Add To Card</Button>
      </CardActions>
    </Card>
  );
}
export default Cards
