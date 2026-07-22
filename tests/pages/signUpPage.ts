import { expect, type Page } from '@playwright/test';

class SignUpPage {
  private page: Page;
  private firstNameInput;
  private lastNameInput;
  private emailInput;
  private passwordInput;
  private signUpButton;
  private errorMessage;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="first_name"]');
    this.lastNameInput = page.locator('input[name="last_name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.signUpButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.alert-danger');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth/register');
  }

  async register({ firstName, lastName, username, password }: { firstName: string; lastName: string; username: string; password: string }): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signUpButton.click();
  }

  async expectErrorVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}

export default SignUpPage;
