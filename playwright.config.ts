import dotenv from 'dotenv';
import { defineConfig } from '@playwright/test';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL,
  },
});
