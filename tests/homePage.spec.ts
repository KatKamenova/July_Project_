import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';

test.describe('Home page content', () => {
  test('Home page loads successfully', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await expect(page).toHaveTitle(/Practice Software Testing/i);
    await expect(page.getByText(/Practice Black Box Testing/i)).toBeVisible();
    await expect(page.getByRole('img', { name: 'Banner' })).toBeVisible();
  });
});

test.describe('Navigation bar', () => {
  test('User can click on categories navigation', { tag: ['@regression'] }, async ({ page }) => {
    const homePage = new HomePage(page);
    const navigationBar = page.getByRole('button', { name: 'Page-1' });

    await homePage.open();
    await expect(navigationBar).toBeVisible();
  });
});