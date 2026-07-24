# July Project

A small practice project for building and testing a demo website with Playwright, TypeScript, and a simple front-end experience.

Open `https://practicesoftwaretesting.com/` in your browser to view the demo site.

This repository contains:

- a static demo website served from [index.html](index.html)
- interactive front-end behavior in [script.ts](script.ts)
- Playwright end-to-end tests in [tests](tests)
- page object models in [pages](pages)
- a browser automation helper in [debug-login.ts](debug-login.ts)

## Features

- Responsive demo landing page
- Interactive button and contact form behavior
- Playwright-based UI tests for authentication and registration flows
- TypeScript support for cleaner development and better tooling

## Tech Stack

- HTML/CSS/JavaScript (TypeScript)
- Playwright
- TypeScript
- Node.js
- dotenv

## Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm

## Installation

From the project root, install dependencies:

```bash
npm install
```

## Running the Demo Website

You can open [index.html](index.html) directly in a browser, or use any local static server if you prefer.

Example with a simple live server:

```bash
npx http-server .
```

Then open the displayed local URL in your browser.

## Running Tests

The project uses Playwright for end-to-end testing.

Run the full test suite:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

## Environment Variables

The helper script [debug-login.ts](debug-login.ts) uses environment variables for login automation. Create a `.env` file in the project root with values such as:

```env
BASE_URL=https://practicesoftwaretesting.com/
VALID_USER_USERNAME=your-email@example.com
VALID_USER_PASSWORD=your-password
```

## Project Structure

- [index.html](index.html) — main page layout and content
- [styles.css](styles.css) — site styling
- [script.ts](script.ts) — interactive UI behavior
- [debug-login.ts](debug-login.ts) — Playwright login automation helper
- [tests](tests) — Playwright test specifications
- [pages](pages) — page object classes for test reuse
- [enums](enums) — shared test data and constants
- [playwright.config.ts](playwright.config.ts) — Playwright configuration
- [tsconfig.json](tsconfig.json) — TypeScript compiler settings

## Notes

- The project is intended as a practice and learning environment.
- Tests are organized around real user flows such as login, sign-up, and home-page validation.
- Page objects are kept in [pages](pages) to make the tests easier to read and maintain.

## License

This project is for practice and educational use.
