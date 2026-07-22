import { expect, type Page } from '@playwright/test';

class HeaderPage {
  private page: Page;
  private homeLink;
  private categoriesLink;
  private contactLink;
  private signInLink;
  private LanguageSelector;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator('[data-test="nav-home"]');
    this.categoriesLink = page.locator('[data-test="nav-categories"]');
    this.contactLink = page.locator('[data-test="nav-contact"]');
    this.signInLink = page.locator('[data-test="nav-sign-in"]');
    this.LanguageSelector = page.locator('#language');
  }

  async expectVisible(): Promise<void> {
    await expect(this.homeLink).toBeVisible();
    await expect(this.categoriesLink).toBeVisible();
    await expect(this.contactLink).toBeVisible();
    await expect(this.LanguageSelector).toBeVisible();
  }

  async openSignIn(): Promise<void> {
    await this.signInLink.click();
  }

  async clickHome(): Promise<void> {
    await this.homeLink.click();
  }

  async clickCategories(): Promise<void> {
    await this.categoriesLink.click();
  }

  async clickContact(): Promise<void> {
    await this.contactLink.click();
  }

  async clickLanguage(): Promise<void> {
    await this.LanguageSelector.click();
  }
}

export default HeaderPage;
