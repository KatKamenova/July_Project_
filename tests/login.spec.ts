import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import Credentials from '../enums/credentials';

test.describe('Authentication flow', () => {
  test('Valid credentials log the user in', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.loginWithValidCredentials(Credentials.validUser);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
  });
});

// test.describe('Unsuccessful login attempts', () => {
//   test('Invalid credentials show an error message', { tag: ['@regression'] }, async ({ page }) => {
//     const loginPage = new LoginPage(page);

//     await loginPage.open();
//     await loginPage.loginWithInvalidCredentials(Credentials.invalidUser);
//     await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
//   });

  test('Empty credentials show an error message', { tag: ['@regression'] }, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.loginWithInvalidCredentials({ emailAddress: '', password: '' });
    await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
  });
});
