export const Credentials = {
  validUser: {
    username: process.env.VALID_USER_USERNAME || '',
    password: process.env.VALID_USER_PASSWORD || '',
  },
  invalidUser: {
    username: process.env.INVALID_USER_USERNAME || '',
    password: process.env.INVALID_USER_PASSWORD || '',
  },
};

export default Credentials;
