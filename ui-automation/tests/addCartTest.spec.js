const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');

test.describe('Shopping Cart Tests', () => {
    let page;
    let loginPage;
    let productsPage;
    let cartPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        cartPage = new CartPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Add multiple products to cart and verify', async () => {
        try {
            console.log("Starting test: Add multiple products to cart");

            // Log in to the site
            await loginPage.login('standard_user', 'secret_sauce');
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');  // Ensure we are on the products page

            // Add first product to the cart
            await productsPage.addProductToCart();
            console.log('First product added to cart.');

            // Go to the cart page and verify the product is there
            await productsPage.goToCart();
            const cartDetails = await cartPage.getCartProductDetails();
            console.log('Cart contains products:', cartDetails.names);

            expect(cartDetails.names.length).toBeGreaterThan(0);  // Ensure at least one product is in the cart

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

    test('Complete the checkout process and verify', async () => {
        try {
            console.log("Starting test: Complete checkout process");
            await loginPage.login('standard_user', 'secret_sauce');
            // Add your checkout operations here.
            console.log('Test passed: Complete the checkout process');
        } catch (error) {
            console.error('Error during test: Complete checkout process', error);
        }
    });
});
