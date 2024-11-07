class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async login(username, password) {
        console.log("Navigating to the login page...");
        await this.page.goto('https://www.saucedemo.com', { waitUntil: 'load' });
        
        console.log("Waiting for username input field...");
        await this.page.waitForSelector('[data-test="username"]', { timeout: 60000 });

        console.log("Filling in the username and password...");
        await this.page.fill('[data-test="username"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-button"]');
        
        console.log("Login attempt completed.");
    }
}

module.exports = { LoginPage }; // Correct export of the class
