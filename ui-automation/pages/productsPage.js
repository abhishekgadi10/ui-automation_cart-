class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('.inventory_item_name');
        this.productPrice = page.locator('.inventory_item_price');
        this.addToCartButton = page.locator('.btn_inventory');
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async getProductDetails() {
        const name = await this.productTitle.first().innerText();
        const price = await this.productPrice.first().innerText();
        return { name, price };
    }

    async addProductToCart() {
        await this.addToCartButton.first().click();  // Click the "Add to Cart" button for the first product
    }

    async goToCart() {
        await this.cartButton.click();  // Navigate to the cart
    }
}

module.exports = { ProductsPage };
