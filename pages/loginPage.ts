import { expect, type Page } from '@playwright/test';

class LoginPage {
  private page: Page;
  private emailInput;
  private passwordInput;
  private loginButton;
  private signUpLink;
  private errorMessageWrongEmail;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.errorMessageWrongEmail = page.getByText('Email is required', { exact: true });
    this.signUpLink = page.locator('[data-test="register-link"]');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth/login');
  }

  async loginWithValidCredentials({ emailAddress, password }: { emailAddress: string; password: string }): Promise<void> {
    await this.emailInput.fill(emailAddress);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  expectErrorVisible(): Promise<void> {
    return expect(this.errorMessageWrongEmail).toBeVisible();
  }

  async navigateToSignUp(): Promise<void> {
    await this.signUpLink.click();
  }

  async loginWithInvalidCredentials({ emailAddress, password }: { emailAddress: string; password: string }): Promise<void> {
    await this.emailInput.fill(emailAddress);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

}

export default LoginPage;
