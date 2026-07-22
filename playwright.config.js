const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
