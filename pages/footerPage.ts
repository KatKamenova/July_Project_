import type { Page } from '@playwright/test';

class FooterPage {
  private page: Page;
  private privacyPolicyLink;

  constructor(page: Page) {
    this.page = page;
    this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

}

export default FooterPage;
