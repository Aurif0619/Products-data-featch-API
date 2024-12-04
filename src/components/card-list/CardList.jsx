import { Box, Drawer, Typography } from '@mui/material';

const CartList = ({ openCartList, toggleCartList }) => {
  return (
    <Drawer open={openCartList} onClose={toggleCartList(false)}>
      <Box sx={{ width: 280, p: 2 }}>
        <Typography variant="h6">Cart Content</Typography>
      </Box>
    </Drawer>
  );
};

export default CartList;
