import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import CartDetail from '../pages/CartDetail/CartDetail';
import Carts from '../pages/Carts/Carts';
import Home from '../pages/Home/Home';
import UserCarts from '../pages/UserCarts/UserCarts';
import Users from '../pages/Users/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'users', element: <Users /> },
      { path: 'users/:userId/carts', element: <UserCarts /> },
      { path: 'carts', element: <Carts /> },
      { path: 'carts/:cartId', element: <CartDetail /> },
    ],
  },
]);
