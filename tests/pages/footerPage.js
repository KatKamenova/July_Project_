const { expect } = require('@playwright/test');

class FooterPage {
  constructor(page) {
    this.page = page;
    this.privacyPolicyLink = page.getByRole('link', { name: /privacy policy/i });
    this.demoMessage = page.getByText(/this is a demo application/i);
  }

  async expectVisible() {
    await expect(this.privacyPolicyLink).toBeVisible();
    await expect(this.demoMessage).toBeVisible();
  }
}

module.exports = FooterPage;
