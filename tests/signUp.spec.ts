import Credentials from '../enums/credentials.ts';
import { test, expect } from '@playwright/test';
import SignUpPage from '../pages/signUpPage.ts';

test('Sign up with valid credentials', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  const signUpPage = new SignUpPage(page);

  await signUpPage.open();
  await signUpPage.register(Credentials.validUser);
  await expect(page).toHaveURL('/auth/login');
});