import type { Page } from '@playwright/test';

class SignUpPage {
  private page: Page;
  private firstNameInput;
  private lastNameInput;
  private emailInput;
  private passwordInput;
  private countryInput;
  private dobInput;
  private postalCodeInput;
  private houseNumberInput;
  private streetInput;
  private cityInput;
  private stateInput;
  private phoneInput;
  private errorMessage;
  private submitButton;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.dobInput = page.locator('[data-test="dob"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.houseNumberInput = page.locator('[data-test="house_number"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.phoneInput = page.locator('[data-test="phone"]');
    this.countryInput = page.locator('[data-test="country"]');
    this.errorMessage = page.locator('.alert-danger');
    this.submitButton = page.locator('[data-test="register-submit"]');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth/register');
  }

  async register({ firstName, lastName, dob, country, postalCode, houseNumber, street, city, state, phone, emailAddress, password }: { firstName: string; lastName: string; dob: string; country: string; postalCode: string; houseNumber: string; street: string; city: string; state: string; phone: string; emailAddress: string; password: string }): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.dobInput.fill(dob);
    await this.countryInput.selectOption({ label: country || 'United States of America (the)' });
    await this.postalCodeInput.fill(postalCode);
    await this.houseNumberInput.fill(houseNumber);
    await this.streetInput.fill(street);
    await this.cityInput.fill(city);
    await this.stateInput.fill(state);
    await this.phoneInput.fill(phone);
    await this.emailInput.fill(emailAddress);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

}

export default SignUpPage;
