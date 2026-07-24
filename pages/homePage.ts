import type { Page } from '@playwright/test';

class HomePage {
  private page: Page;
  private categoriesNav;
  private bannerImage;
  private NavigationBar;

  constructor(page: Page) {
    this.page = page;
    this.categoriesNav = page.locator('[data-test="nav-categories"]');
    this.bannerImage = page.getByRole('img', { name: 'Banner' });
    this.NavigationBar = page.getByRole('button', { name: 'Page-1' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

    async clickCategoriesNav(): Promise<void> {
    await this.categoriesNav.click();
  }

  async isBannerImageVisible(): Promise<boolean> {
    return await this.bannerImage.isVisible();
  }
}

export default HomePage;
