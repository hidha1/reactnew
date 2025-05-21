

export const validateField = {
  email: (value) => {
    if (!value) return 'This field is required';
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return valid ? undefined : 'Invalid email format';
  },
  phone: (value) => {
    if (!value) return 'This field is required';
    const valid = /^[0-9]{10}$/.test(value);
    return valid ? undefined : 'Phone must be 10 digits';
  },
  
};

export const validateForm = (values) => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'age',
    'address',
    'pincode',
    'state',
    'district',
    'id',
    'phone',
    'email'
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });

  
  Object.keys(validateField).forEach((field) => {
    if (values[field] && validateField[field](values[field])) {
      errors[field] = validateField[field](values[field]);
    }
  });

  return errors;
};
