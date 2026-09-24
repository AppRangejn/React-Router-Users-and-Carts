import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCartByIdQuery } from '../../api/cartsApi';
import { CartProductsTable } from '../../components/common/CartProductsTable';

function CartDetail() {
  const { cartId } = useParams();
  const navigate = useNavigate();
  const { data: cart } = useGetCartByIdQuery(cartId);

  if (!cart) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>Cart not found</Typography>
        <Button onClick={() => navigate('/carts')}>Back to Carts</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, maxWidth: 800, mx: 'auto' }}>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => navigate('/carts')}
      >
        Back to Carts
      </Button>

      <Typography variant="h5" gutterBottom>
        Cart #{cart.id}
      </Typography>

      <CartProductsTable products={cart.products} />
    </Box>
  );
}

export default CartDetail;
