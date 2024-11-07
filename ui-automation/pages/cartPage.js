class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProductNames = page.locator('.cart_item .inventory_item_name');
        this.cartProductPrices = page.locator('.cart_item .inventory_item_price');
        this.removeButton = page.locator('.cart_button');
    }

    async getCartProductDetails() {
        const productNames = await this.cartProductNames.allTextContents();
        const productPrices = await this.cartProductPrices.allTextContents();
        return { names: productNames, prices: productPrices };
    }

    async removeProductFromCart(index) {
        await this.page.locator(`.cart_item:nth-child(${index + 1}) .cart_button`).click();
    }
}

module.exports = { CartPage };
