import { DEFAULT_USER_VALUES } from '../../../constants/userConstants';

export const getInitialValues = (user) => {
  if (!user) return DEFAULT_USER_VALUES;

  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    city: user.address?.city,
    state: user.address?.state,
    postalCode: user.address?.postalCode,
  };
};

export const formatUserData = (user, values) => {
  const { city, state, postalCode, ...mainFields } = values;

  return {
    ...user,
    ...mainFields,
    address: {
      ...user?.address,
      city,
      state,
      postalCode,
    },
  };
};
