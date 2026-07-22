const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.titleText = 'Practice Software Testing';
    this.heroText = 'Practice Black Box Testing';
    this.categoriesNav = page.locator('[data-test="nav-categories"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async expectLoaded() {
    await expect(this.page).toHaveTitle(new RegExp(this.titleText, 'i'));
    await expect(this.page.getByText(new RegExp(this.heroText, 'i'))).toBeVisible();
    await expect(this.categoriesNav).toBeVisible();
  }
}

module.exports = HomePage;
