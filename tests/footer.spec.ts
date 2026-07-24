import { test, expect } from '@playwright/test';
import FooterPage from '../pages/footerPage';

test.describe('Footer content', () => {
  test('Footer contains privacy policy link and demo message', { tag: ['@regression'] }, async ({ page }) => {
    const footerPage = new FooterPage(page);
    await footerPage.open();

    await expect(page.getByRole('link', { name: /privacy policy/i })).toBeVisible();
    await expect(page.getByText(/This is a DEMO application/i)).toBeVisible();
  });
});
