import { TextField } from '@mui/material';

export function AppTextField({ name, label, type = 'text', formik, ...props }) {
  const isError = formik.touched[name] && Boolean(formik.errors[name]);

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...formik.getFieldProps(name)}
      error={isError}
      helperText={isError ? formik.errors[name] : ''}
      {...props}
    />
  );
}
