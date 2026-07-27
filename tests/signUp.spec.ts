import { test, expect } from './fixtures';
import SignUpPage from '../pages/signUpPage.ts';

test('Sign up with valid credentials', { tag: ['@smoke', '@regression'] }, async ({ page, newUser }) => {
  const signUpPage = new SignUpPage(page);

  await signUpPage.open();
  await signUpPage.register(newUser);
  await expect(page).toHaveURL('/auth/login');
});