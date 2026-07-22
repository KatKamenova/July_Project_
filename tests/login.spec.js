import { test, expect } from '@playwright/test';
import LoginPage from './pages/loginPage.js';
import Credentials from '../enums/credentials.js';

test('valid credentials log the user in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(Credentials.validUser);

  await expect(page).toHaveURL(/.*(dashboard|account|home).*/i);
});
