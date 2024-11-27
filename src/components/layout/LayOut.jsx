import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const LayOut = () => {
  const [Products, setProducts] = useState([]);
  console.log(Products, "Products");

  useEffect(() => {
    const ProductsData = axios.get("http://api.escuelajs.co/api/v1/products").then((data) => setProducts(data.data));
    console.log(ProductsData, 'products');
  }, []);

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" color="success">
        Home Page
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {Products.map((product) => (
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
                  overflow: 'hidden',
                }}
              > {product.images && (
                <img className='img-fluid' src={product.images[0]} alt='img' />
              )}
              </Box>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {product.category?.name}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {product.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                  <Box>

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
                <Rating> 
                   {product.rating} ★ ({product.reviews})
                </Rating>
                  </Box>
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
