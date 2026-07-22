import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`${process.env.BASE_URL}/auth/login`);
console.log('title', await page.title());
console.log('url', page.url());
console.log('body', (await page.locator('body').innerText()).slice(0, 2000));
await page.locator('input[name="email"]').fill(process.env.VALID_USER_USERNAME || '');
await page.locator('input[name="password"]').fill(process.env.VALID_USER_PASSWORD || '');
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(5000);
console.log('after-url', page.url());
console.log('after-body', (await page.locator('body').innerText()).slice(0, 2500));
await browser.close();
