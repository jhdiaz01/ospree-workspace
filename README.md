# Ospree Playwright Test Automation

This repository contains automated tests for the Ospree application using Playwright and TypeScript.

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Configuration

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
2. Fill in your test credentials and environment settings in the `.env` file

### Project Structure

- `pages/` - Page Object Model classes for different application pages
- `tests/` - Organized test specifications  
- `test-options.ts` - Custom Playwright test configuration and fixtures

### Running Tests

- Run Directory tests on Chrome: `npm run directoryPage-chrome`
- Run Directory tests on Firefox: `npm run directoryPage-firefox`  
- Run tests against development environment: `npm run autoWait-dev`
- Run tests against staging environment: `npm run autoWait-staging`

### Best Practices

- Follow the Page Object Model pattern for maintainable tests
- Use environment variables for configuration and credentials
- Use semantic locators (roles, labels) over CSS selectors when possible
- Add proper assertions and error handling
