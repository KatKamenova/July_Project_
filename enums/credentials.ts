export const Credentials = {
  validUser: {
    firstName: process.env.VALID_USER_FIRST_NAME || '',
    lastName: process.env.VALID_USER_LAST_NAME || '',
    dob: process.env.VALID_USER_DOB || '',
    country: process.env.VALID_USER_COUNTRY || 'United States',
    postalCode: process.env.VALID_USER_POSTAL_CODE || '',
    houseNumber: process.env.VALID_USER_HOUSE_NUMBER || '',
    street: process.env.VALID_USER_STREET || '',
    city: process.env.VALID_USER_CITY || '',
    state: process.env.VALID_USER_STATE || '',
    phone: process.env.VALID_USER_PHONE || '',
    emailAddress: process.env.VALID_USER_EMAIL_ADDRESS || '',
    password: process.env.VALID_USER_PASSWORD || '',
  },
  invalidUser: {
    firstName: process.env.INVALID_USER_FIRST_NAME || '',
    lastName: process.env.INVALID_USER_LAST_NAME || '',
    dob: process.env.INVALID_USER_DOB || '',
    postalCode: process.env.INVALID_USER_POSTAL_CODE || '',
    houseNumber: process.env.INVALID_USER_HOUSE_NUMBER || '',
    street: process.env.INVALID_USER_STREET || '',
    city: process.env.INVALID_USER_CITY || '',
    state: process.env.INVALID_USER_STATE || '',
    phone: process.env.INVALID_USER_PHONE || '',
    emailAddress: process.env.INVALID_USER_EMAIL_ADDRESS || '',
    password: process.env.INVALID_USER_PASSWORD || '',
  },
};

export default Credentials;
