# Automation Framework - UI and API Testing

## Overview:
This project contains two exercises for automation testing:

1. **UI Automation Testing**: Testing the add-to-cart functionality of the Saucedemo website using Playwright and JavaScript.
2. **API Automation Testing**: Verifying the status code of a GET request from a demo API (Reqres) using Axios.

## Prerequisites:
Before running the tests, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Playwright](https://playwright.dev/) (for UI testing)
- [Axios](https://axios-http.com/) (for API testing)

## UI Automation Testing

### Test Scenario:
1. Navigate to the site [Saucedemo.com](https://www.saucedemo.com/).
2. Login to the site using the provided credentials (standard user: `standard_user`, password: `secret_sauce`).
3. Verify that the login is successful and lands the user on the Products page.
4. Get the first product name and price and store it in a text file.
5. Add the product to the cart.
6. Navigate to the cart page and verify that the product is present in the cart.
7. Logout.

### Folder Structure:
- **ui-automation/pages**: Contains Page Object Models for Login, Products, and Cart pages.
- **ui-automation/tests**: Contains test scripts for the shopping cart functionality.
- **ui-automation/utils**: Contains helper functions and setup/teardown utilities.
- **ui-automation/data**: Contains data files like product data.

### Running UI Tests:
1. Install Playwright:
   ```bash
   npm install playwright
2. Run the tests using Playwright:
   npx playwright test ui-automation/tests/addCartTest.spec.js
### UI Automation Test Details:
This test automates the following steps:

- Navigating to the login page.
- Logging in with credentials.
- Verifying the product list page.
- Adding a product to the cart.
- Verifying the product in the cart.
### API Automation Testing
**Test Scenario:**
1. Make a GET request to https://reqres.in/api/users/2.
2. Validate that the response status code is 200.
   
**Running API Tests:**
1. Install Axios:
   ```bash
   npm install axios
3. Run the API test script:
   ```bash
   node ui-automation/tests/apiTest.js
### API Automation Test Details:
This test performs the following:

1. Makes a GET request to the API.
2. Validates that the status code is 200.
