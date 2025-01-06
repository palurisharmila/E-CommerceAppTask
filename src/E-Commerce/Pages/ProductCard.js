import React from 'react';
import {Button, Card,CardContent,CardMedia,Typography} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';

const ProductCard =({product,onAddToCart})=>{

  const navigate=useNavigate();
  
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

    return(
    <Card sx={{ maxWidth: 250, height: 330, margin: "20px" , overflow:"auto" }} >
       
        <CardMedia component="img" height="250"  width="200" image={product.image||product.thumbnail} alt={product.title} onClick={handleCardClick}/>
        <CardContent>
            <Typography gutterBottom variant='h6' component="div">
                {product.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                ${product.price}
            </Typography>
            <Typography variant="h8">Rating : {product.rating}</Typography><br></br>
            <Button
          variant="contained"
          color="primary"
          onClick={() => onAddToCart(product)}
          sx={{ marginTop: "auto" }}
        >
          Add To Cart
        </Button>        </CardContent>
    </Card>
    );
}

export default ProductCard;
