import { expect, type Page } from '@playwright/test';

class LoginPage {
  private page: Page;
  private emailInput;
  private passwordInput;
  private loginButton;
  private errorMessage;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.alert-danger');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth/login');
  }

  async login({ username, password }: { username: string; password: string }): Promise<void> {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}

export default LoginPage;
