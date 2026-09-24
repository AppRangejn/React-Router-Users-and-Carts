import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGetCartsQuery } from '../../api/cartsApi';

function Carts() {
  const navigate = useNavigate();
  const { data } = useGetCartsQuery();

  const carts = data?.carts || [];

  return (
    <Box sx={{ p: 2 }}>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cart</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((cart) => (
              <TableRow
                key={cart.id}
                hover
                onClick={() => navigate(`/carts/${cart.id}`)}
              >
                <TableCell>Cart #{cart.id}</TableCell>
                <TableCell align="right">${cart.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Carts;
