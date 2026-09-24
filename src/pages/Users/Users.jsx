import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApi';
import {
  deleteUser,
  setUsers,
  updateUser,
} from '../../store/slices/usersSlice';

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import EditUserModal from './EditUserModal';

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useGetUsersQuery();

  const users = useSelector((state) => state.users.users);
  const isInitialized = useSelector((state) => state.users.isInitialized);

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    if (data?.users && !isInitialized) {
      dispatch(setUsers(data.users));
    }
  }, [data, isInitialized, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSave = (updatedUser) => {
    dispatch(updateUser(updatedUser));
  };

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
              <TableCell>User</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell onClick={() => navigate(`/users/${user.id}/carts`)}>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => setEditingUser(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <EditUserModal
        user={editingUser}
        onClose={() => setEditingUser(null)}
        onSave={handleSave}
      />
    </Box>
  );
}

export default Users;
