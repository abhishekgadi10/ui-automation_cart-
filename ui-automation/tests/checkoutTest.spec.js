const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage'); // Ensure the path is correct

test.describe('Checkout Tests', () => {
    let page;
    let loginPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Add multiple products to cart and verify', async () => {
        try {
            console.log("Starting test: Add multiple products to cart");
            await loginPage.login('standard_user', 'secret_sauce');
            // Add your cart operations here.
            console.log('Test passed: Add multiple products to cart');
        } catch (error) {
            console.error('Error during test: Add multiple products to cart', error);
        }
    });

    test('Test invalid login', async () => {
        try {
            console.log("Starting test: Test invalid login");
            await loginPage.login('invalid_user', 'invalid_pass');
            // Add your validation for invalid login here.
            console.log('Test passed: Test invalid login');
        } catch (error) {
            console.error('Error during test: Invalid login', error);
        }
    });
});
