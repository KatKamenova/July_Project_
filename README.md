# July Project - Playwright Automation Framework

A practice automation project built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern.

The project demonstrates end-to-end UI test automation against the demo application:

🔗 https://practicesoftwaretesting.com/

The framework covers common user flows such as authentication, registration, and page validation while following maintainable automation practices.

---

## Prerequisites

Before running this project, make sure you have the following installed:

### Required Software

- **Node.js** 18 or newer

Verify installation:

```bash
node -v
```

- **npm** (included with Node.js)

Verify installation:

```bash
npm -v
```

- **Git**

Verify installation:

```bash
git --version
```

### Development Tools (Recommended)

- **Visual Studio Code** or another TypeScript-compatible IDE
- **Playwright extension for VS Code** (optional)
- Modern web browser:
  - Chromium
  - Firefox
  - WebKit

### Project Requirements

- Access to the demo application:

```text
https://practicesoftwaretesting.com/
```

- Environment variables configured in a local `.env` file for authentication tests

Example:

```env
BASE_URL=https://practicesoftwaretesting.com/

VALID_USER_USERNAME=your-email@example.com
VALID_USER_PASSWORD=your-password
```

---

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Architecture](#test-architecture)
- [Reports and Artifacts](#reports-and-artifacts)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview

This repository contains:

- Playwright end-to-end test automation
- Page Object Model implementation
- TypeScript-based test development
- Environment-based configuration using dotenv
- Reusable test data and constants
- Browser automation utilities

The tests are executed against:

```text
https://practicesoftwaretesting.com/
```

---

## Features

- End-to-end UI automation with Playwright
- Page Object Model architecture
- Authentication flow testing
- Registration flow testing
- Home page validation
- Reusable page components
- Environment variable support
- Type-safe test development with TypeScript
- Playwright HTML reporting
- Screenshot and trace collection on failures

---

## Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| TypeScript | Programming language            |
| Playwright | UI automation framework         |
| Node.js    | Runtime environment             |
| npm        | Package management              |
| dotenv     | Environment variable management |
| HTML/CSS   | Demo application structure      |

---

## Project Structure

```text
July_Project_/
│
├── enums/                         # Shared constants and test data
│
├── pages/                         # Page Object Model classes
│
├── tests/                         # Playwright test specifications
│
├── .env                           # Local environment variables
├── .gitignore                     # Git ignored files configuration
├── README.md                      # Project documentation
│
├── debug-login.ts                 # Helper script for login debugging
├── index.html                     # Demo application page
├── script.ts                      # Demo application interactions
├── styles.css                     # Demo application styling
│
├── package.json                   # Project dependencies and npm scripts
├── package-lock.json              # Dependency lock file
├── playwright.config.ts           # Playwright configuration
└── tsconfig.json                  # TypeScript configuration
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd July_Project_
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Configuration

The project uses environment variables to store sensitive information.

Create a `.env` file in the project root:

```env
BASE_URL=https://practicesoftwaretesting.com/

VALID_USER_USERNAME=your-email@example.com
VALID_USER_PASSWORD=your-password
```

The `.env` file should not be committed to Git.

Add it to `.gitignore`:

```text
.env
```

---

## Running Tests

### Run the complete test suite

```bash
npm test
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Run Playwright UI mode

```bash
npx playwright test --ui
```

### Run a specific test file

Example:

```bash
npx playwright test tests/login.spec.ts
```

---

## Test Architecture

The framework follows the **Page Object Model (POM)** design pattern.

### Test Layer

Test scenarios are located in:

```text
tests/
```

Examples:

```text
login.spec.ts
signUp.spec.ts
homePage.spec.ts
```

The test layer is responsible for:

- Defining test scenarios
- Validating expected results
- Calling reusable page methods

---

### Page Object Layer

Page classes are located in:

```text
pages/
```

Each page object contains:

- Page locators
- User interactions
- Page-specific actions

Examples:

```text
LoginPage
SignUpPage
HomePage
HeaderPage
FooterPage
ForgotPasswordPage
```

Benefits:

- Improved maintainability
- Reduced code duplication
- Easier updates when UI changes
- Better test readability

---

## Reports and Artifacts

Playwright generates test reports and execution artifacts.

### HTML Report

Generated reports are stored in:

```text
playwright-report/
```

Open the report:

```bash
npx playwright show-report
```

### Test Artifacts

Stored in:

```text
test-results/
```

Contains:

- Screenshots
- Traces
- Videos (if configured)

---

## Future Improvements

Planned improvements for this framework:

- Add GitHub Actions CI/CD pipeline
- Add API testing layer
- Add automated test data generation
- Add user cleanup after registration tests
- Add reusable Playwright fixtures
- Add cross-browser execution
- Add accessibility testing
- Improve test reporting

---

## Notes

- This project is created as a practice and learning environment.
- Tests are organized around real user flows such as login, registration, and page validation.
- Page objects are separated from test files to improve scalability and maintainability.
- Test data and sensitive credentials are managed through environment variables.

---

## License

This project is created for educational and portfolio purposes.
