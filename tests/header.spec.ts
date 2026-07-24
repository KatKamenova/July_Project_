import { test, expect } from '@playwright/test';
import HeaderPage from '../pages/headerPage';

test.describe('Header navigation', () => {
  test('User can click on home navigation', { tag: ['@regression'] }, async ({ page }) => {
    const headerPage = new HeaderPage(page);

    await headerPage.open();
    await headerPage.clickHome();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
  });

  test('User can click on categories navigation', { tag: ['@regression'] }, async ({ page }) => {
    const headerPage = new HeaderPage(page);

    await headerPage.open();
    await headerPage.clickCategories();
    await expect(page.locator('[data-test="nav-categories"]')).toBeVisible();
  });

  test('User can click on contact navigation', { tag: ['@regression'] }, async ({ page }) => {
    const headerPage = new HeaderPage(page);

    await headerPage.open();
    await headerPage.clickContact();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/contact');
  });

  test('User can click on sign-in navigation', { tag: ['@regression'] }, async ({ page }) => {
    const headerPage = new HeaderPage(page);

    await headerPage.open();
    await headerPage.openSignIn();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  });

  test('User can click on language selector', { tag: ['@regression'] }, async ({ page }) => {
    const headerPage = new HeaderPage(page);

    await headerPage.open();
    await headerPage.clickLanguage();
    await expect(page.locator('#language')).toBeVisible();
  });
});