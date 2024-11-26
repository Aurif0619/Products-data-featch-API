import React, { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Img1 from '../../assets/product-img-1.jpg';
import Img2 from '../../assets/product-img-2.jpg';
import Img3 from '../../assets/product-img-3.jpg';
import axios from 'axios';

const products = [

  {
    id: 1,
    title: "Haldiram's Sev Bhujia",
    category: 'Snack & Munchies',
    price: 18,
    originalPrice: 24,
    rating: 4.5,
    reviews: 149,
    tag: 'Sale',
    image: Img1,
  },
  {
    id: 2,
    title: 'NutriChoice Digestive',
    category: 'Bakery & Biscuits',
    price: 24,
    rating: 4.5,
    reviews: 25,
    tag: '14%',
    image: Img2,
  },
  {
    id: 3,
    title: 'Cadbury 5 Star Chocolate',
    category: 'Bakery & Biscuits',
    price: 32,
    originalPrice: 35,
    rating: 5,
    reviews: 469,
    image: Img3,
  },
];

const LayOut = () => {

  useEffect(()=>{
const ProductsData = axios.get("api.escuelajs.co/api/v1/products");

console.log(ProductsData, 'products' );

  },[]);
  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" color="success">
        Home Page
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <Box
                sx={{
                  width: '70%',
                  margin: '0 auto', 
                  overflow: 'hidden', 
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {product.category}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {product.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" color="textPrimary">
                    ${product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      component="span"
                      sx={{
                        textDecoration: 'line-through',
                        color: '#999',
                        fontSize: '0.9rem',
                      }}
                    >
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ display: 'block', mt: 1 }}
                >
                  {product.rating} ★ ({product.reviews})
                </Typography>
              </CardContent>
              <Box sx={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  startIcon={<AddIcon />}
                  sx={{ width: '90%' }}
                >
                  Add
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LayOut;
