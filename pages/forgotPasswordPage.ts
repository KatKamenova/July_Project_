import type { Page } from '@playwright/test';

class ForgotPasswordPage {
    private emailAddress;
    private setNewPasswordButton;
    private emptyEmailFieldError;

    constructor(page: Page) {
        this.emailAddress = page.locator('[data-test="email"]');
        this.setNewPasswordButton = page.locator('[data-test="forgot-password-submit"]');
        this.emptyEmailFieldError = page.getByText('Email is required', { exact: true });
    }
}
