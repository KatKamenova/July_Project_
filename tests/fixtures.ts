import { test as base, expect, type Page } from '@playwright/test';
import SignUpPage from '../pages/signUpPage';

type User = {
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  postalCode: string;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  emailAddress: string;
  password: string;
};

type Fixtures = {
  newUser: User;
  registeredUser: User;
};

const generateRandomUser = (): User => {
  const randomId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return {
    firstName: `Test${randomId}`,
    lastName: `User${randomId}`,
    dob: '1990-12-31',
    country: 'United States',
    postalCode: '12345',
    houseNumber: '1',
    street: 'Main Street',
    city: 'New York',
    state: 'NY',
    phone: '325954854',
    emailAddress: `user+${randomId}@example.com`,
    password: `P@ssw0rd!${randomId}`,
  };
};

export const test = base.extend<Fixtures>({
  newUser: async ({}, use) => {
    await use(generateRandomUser());
  },

  registeredUser: async ({ page, newUser }, use) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.open();
    await signUpPage.register(newUser);
    await expect(page).toHaveURL('/auth/login');
    await use(newUser);
  },
});

export { expect };
export type { User };
