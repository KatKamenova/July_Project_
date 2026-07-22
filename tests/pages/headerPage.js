const { expect } = require('@playwright/test');

class HeaderPage {
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('[data-test="nav-home"]');
    this.categoriesLink = page.locator('[data-test="nav-categories"]');
    this.contactLink = page.locator('[data-test="nav-contact"]');
    this.signInLink = page.locator('[data-test="nav-sign-in"]');
    this.LanguageSelector = page.locator('#language');
  }

  async expectVisible() {
    await expect(this.homeLink).toBeVisible();
    await expect(this.categoriesLink).toBeVisible();
    await expect(this.contactLink).toBeVisible();
    await expect(this.LanguageSelector).toBeVisible();
  }

  async openSignIn() {
    await this.signInLink.click();
  }

  async clickHome() {
    await this.homeLink.click();
  }

  async clickCategories() {
    await this.categoriesLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
  }

  async clickLanguage() {
    await this.LanguageSelector.click();
  }
}

module.exports = HeaderPage;
