import { Box, Typography } from '@mui/material';
import React from 'react'
import Img404 from '../../assets/Img404.jpeg'
const PageNotFound = () => {
  return (
    <>
<Box className="d-flex justify-content-center align-items-center">
  <Box className="border w-100 d-flex" sx={{height:'100vh'}}>
    <img className='w-100 h-100' src={Img404} alt="" />
  </Box>
</Box>
    </>
  )
}

export default PageNotFound;