import { expect, type Page } from '@playwright/test';

class HomePage {
  private page: Page;
  private titleText = 'Practice Software Testing';
  private heroText = 'Practice Black Box Testing';
  private categoriesNav;

  constructor(page: Page) {
    this.page = page;
    this.categoriesNav = page.locator('[data-test="nav-categories"]');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(this.titleText, 'i'));
    await expect(this.page.getByText(new RegExp(this.heroText, 'i'))).toBeVisible();
    await expect(this.categoriesNav).toBeVisible();
  }
}

export default HomePage;
