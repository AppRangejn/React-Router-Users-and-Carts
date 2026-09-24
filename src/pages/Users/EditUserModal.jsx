import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { useFormik } from 'formik';
import { AppTextField } from '../../components/common/AppTextField';
import { USER_FORM_FIELDS } from '../../constants/userConstants';
import { userValidationSchema } from '../../validation/userValidation';
import { formatUserData, getInitialValues } from './utils/userUtils';

function EditUserModal({ user, onClose, onSave }) {
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: userValidationSchema,
    validateOnMount: true,
    initialValues: getInitialValues(user),
    onSubmit: (values) => {
      onSave(formatUserData(user, values));
      onClose();
    },
  });

  const isSaveDisabled =
    !formik.isValid || !formik.dirty || formik.isSubmitting;

  return (
    <Dialog open={Boolean(user)} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit User</DialogTitle>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <Stack spacing={2}>
            {USER_FORM_FIELDS.map((field) => (
              <AppTextField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                formik={formik}
              />
            ))}
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isSaveDisabled}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EditUserModal;
