import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserCartsQuery } from '../../api/cartsApi';
import { CartProductsTable } from '../../components/common/CartProductsTable';

function UserCarts() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetUserCartsQuery(userId);

  const carts = data?.carts || [];

  return (
    <Box sx={{ p: 2, maxWidth: 800, mx: 'auto' }}>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => navigate('/users')}
      >
        Back to Users
      </Button>

      {carts.length === 0 ? (
        <Typography color="text.secondary">
          No carts found for this user.
        </Typography>
      ) : (
        carts.map((cart) => (
          <Box key={cart.id} sx={{ mb: 3 }}>
            <CartProductsTable products={cart.products} />
          </Box>
        ))
      )}
    </Box>
  );
}

export default UserCarts;
