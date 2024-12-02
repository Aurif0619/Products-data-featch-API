import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, CssBaseline, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Rating, Toolbar, Typography, Divider, Menu, MenuItem, CircularProgress, Autocomplete, TextField, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const LayOut = () => {
  const [updateProductsArr, setUpdateProductsArr] = useState([]);
  const [Products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [categoryArr, setCategoryArr] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const filterProducts = (categoryProducts) => {
    if (!categoryProducts) {
      return;
    }

    console.log(categoryProducts, 'categoryProducts');
    const filteredProducts = Products.filter(
      (item) => item.category.name === categoryProducts.value
    );
    setUpdateProductsArr(filteredProducts);
  };


  useEffect(() => {
    // Fetching products data
    const productsData = axios
      .get('http://api.escuelajs.co/api/v1/products')
      .then((data) => {
        const filterData = data?.data?.filter((product) => product.title !== 'New Product');

        // Mapping categories
        const categoryArr = filterData.map((item) => ({
          label: item.category.name,
          value: item.category.name,
        }));

        //  unique categories
        const uniqueData = categoryArr.filter(
          (item, index, self) => index === self.findIndex((t) => t.value === item.value)
        );

        setCategoryArr(uniqueData);
        setProducts(filterData);
        setUpdateProductsArr(filterData);
        setLoadingData(false);
      });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Commerce
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            E-Commerce
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <AccountCircleIcon sx={{ color: '#fff', fontSize: '28px' }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to={'/lay-out'} className="text-decoration-none">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to={'/sign-up'} className="text-decoration-none">
                Sign Up
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to={'/sign-in'} className="text-decoration-none">
                Sign In
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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
                          src={img}
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
    </Box>
  );
};

export default LayOut;
