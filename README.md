# July Project

A small practice project for building and testing a demo website with Playwright, TypeScript, and a simple front-end experience.

The default application base URL for this project is `https://practicesoftwaretesting.com/`.

Open that URL in your browser to view the demo site.

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

- HTML/CSS/ (TypeScript)
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

The project is configured to use the base URL `https://practicesoftwaretesting.com/`.

You can open the live application at `https://practicesoftwaretesting.com/`, or use the local project files as a reference while working on the tests and automation setup.

Example with a simple live server:

```bash
npx http-server .
```

Then open the displayed local URL in your browser.

## Running Tests

The project uses Playwright for end-to-end testing against the base URL `https://practicesoftwaretesting.com/`.

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

```text
July_Project_/
├── tests/                     # Playwright test specifications
│   ├── homePage.spec.ts
│   ├── login.spec.ts
│   └── signUp.spec.ts
├── pages/                     # Page Object classes
│   ├── homePage.ts
│   ├── loginPage.ts
│   ├── signUpPage.ts
│   ├── headerPage.ts
│   ├── footerPage.ts
│   └── forgotPasswordPage.ts
├── enums/                     # Shared test data and constants
│   └── credentials.ts
├── playwright-report/         # Generated Playwright HTML report
├── test-results/              # Test artifacts such as screenshots and traces
├── index.html                 # Main demo page
├── styles.css                 # Page styling
├── script.ts                  # Demo page interactivity
├── debug-login.ts             # Helper script for login automation
├── playwright.config.ts       # Playwright configuration
├── package.json               # Scripts and dependencies
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project documentation
└── .env                       # Local environment variables
```

### Key folders
- [tests](tests) — Playwright test specifications
- [pages](pages) — page object classes used by the tests
- [enums](enums) — shared test data and constants
- [playwright-report](playwright-report) — generated HTML reports
- [test-results](test-results) — runtime artifacts from test runs
- [playwright.config.ts](playwright.config.ts) — Playwright configuration and browser setup
- [package.json](package.json) — project scripts and dependencies
- [tsconfig.json](tsconfig.json) — TypeScript configuration

## Notes

- The project is intended as a practice and learning environment.
- Tests are organized around real user flows such as login, sign-up, and home-page validation.
- Page objects are kept in [pages](pages) to make the tests easier to read and maintain.

## License

This project is for practice and educational use.
