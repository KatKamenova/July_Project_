import { expect, type Page } from '@playwright/test';

class FooterPage {
  private page: Page;
  private privacyPolicyLink;
  private demoMessage;

  constructor(page: Page) {
    this.page = page;
    this.privacyPolicyLink = page.getByRole('link', { name: /privacy policy/i });
    this.demoMessage = page.getByText(/this is a demo application/i);
  }

  async expectVisible(): Promise<void> {
    await expect(this.privacyPolicyLink).toBeVisible();
    await expect(this.demoMessage).toBeVisible();
  }
}

export default FooterPage;
