import type { Page } from '@playwright/test';

class HomePage {
  private page: Page;
  private titleText = 'Practice Software Testing';
  private heroText = 'Practice Black Box Testing';
  private categoriesNav;
  private bannerImage;

  constructor(page: Page) {
    this.page = page;
    this.categoriesNav = page.locator('[data-test="nav-categories"]');
    this.bannerImage = page.getByRole('img', { name: 'Banner' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }
}

export default HomePage;
