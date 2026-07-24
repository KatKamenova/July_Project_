import type { Page } from '@playwright/test';

class FooterPage {
  private page: Page;
  private privacyPolicyLink;
  private demoMessage;

  constructor(page: Page) {
    this.page = page;
    this.privacyPolicyLink = page.getByRole('link', { name: /privacy policy/i });
    this.demoMessage = page.getByText(/This is a DEMO application/i);
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

}

export default FooterPage;
