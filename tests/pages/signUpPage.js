const { expect } = require('@playwright/test');

class SignUpPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[name="first_name"]');
    this.lastNameInput = page.locator('input[name="last_name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.signUpButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.alert-danger');
  }

  async open() {
    await this.page.goto('/auth/register');
  }

  async register({ firstName, lastName, username, password }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signUpButton.click();
  }

  async expectErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = SignUpPage;
