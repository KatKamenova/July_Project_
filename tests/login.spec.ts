import { test, expect } from './fixtures';
import LoginPage from '../pages/loginPage';

test.describe('Authentication flow', () => {
  test('Valid credentials log the user in', { tag: ['@smoke', '@regression'] }, async ({ page, registeredUser }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.loginWithValidCredentials(registeredUser);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  });
});

test.describe('Unsuccessful login attempts', () => {
  test('Empty credentials show an error message', { tag: ['@regression'] }, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.loginWithInvalidCredentials({ emailAddress: '', password: '' });
    await expect(page.getByText('Email is required', { exact: true })).toBeVisible();
  });
});
