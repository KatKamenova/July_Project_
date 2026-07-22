const { test, expect } = require('@playwright/test');

test('homepage loads with key content', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Practice Software Testing/i);
  await expect(page.getByText(/Practice Black Box Testing/i)).toBeVisible();
  await expect(page.locator('[data-test="nav-categories"]')).toBeVisible();
});
