import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Rating, Toolbar, Typography, CircularProgress, Autocomplete, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductsDetail = () => {
  const [updateProductsArr, setUpdateProductsArr] = useState([]);
  const [Products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [categoryArr, setCategoryArr] = useState([]);

  const filterProducts = (categoryProducts) => {
    if (!categoryProducts) {
      return;
    }
    const filteredProducts = Products.filter(
      (item) => item.category.name === categoryProducts.value
    );
    setUpdateProductsArr(filteredProducts);
  };

  useEffect(() => {
    axios.get('http://api.escuelajs.co/api/v1/products').then((data) => {
      const filterData = data?.data?.filter((product) => 
        product.title !== 'New Product' && product.images?.length > 0
      );
      const categoryArr = filterData.map((item) => ({
        label: item.category.name,
        value: item.category.name,
      }));
      const uniqueData = categoryArr.filter(
        (item, index, self) => index === self.findIndex((t) => t.value === item.value)
      );
      setCategoryArr(uniqueData);
      setProducts(filterData);
      setUpdateProductsArr(filterData);
      setLoadingData(false);
    });
  }, []);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Autocomplete
          className="my-2"
          disablePortal
          options={categoryArr}
          sx={{ width: 300 }}
          onChange={(e, newValue) => {
            filterProducts(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Categories" />}
        />
        <Grid container spacing={4} justifyContent="center">
          {loadingData ? (
            <Box className="d-flex justify-content-center align-item-center mt-5">
              <CircularProgress size={40} />
            </Box>
          ) : (
            updateProductsArr.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card>
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {product.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          className="img-fluid"
                          src={img || 'https://via.placeholder.com/150'}
                          alt={`Product Image ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {product.category?.name}
                    </Typography>
                    <Typography variant="body2">{product.title}</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box className="mt-2">
                        <Rating value={2} />
                      </Box>
                    </Box>
                    <Box className="d-flex justify-content-between align-items-center mt-3">
                      <Box>
                        <Typography variant="body1" color="textPrimary">
                          ${product.price}
                        </Typography>
                      </Box>
                      <Box sx={{ padding: 1, display: 'flex', justifyContent: 'center' }}>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          startIcon={<AddIcon />}
                        >
                          Add
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
};

export default ProductsDetail;
