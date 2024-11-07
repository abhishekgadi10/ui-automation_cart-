module.exports = {
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['lcov', { outputFile: 'coverage/lcov-report/index.html' }]  // LCOV report for code coverage
    ],
    use: {
        headless: false,
        baseURL: 'https://www.saucedemo.com',
        video: 'on-first-retry', // Enable video recording for failed tests
    },
    workers: 4,
    projects: [
        {
            name: 'desktop',
            use: { viewport: { width: 1280, height: 720 } },
        },
        {
            name: 'mobile',
            use: { 
                viewport: { width: 375, height: 667 },
                userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)...',
            },
        },
    ],
    coverageDirectory: 'coverage'  // Store coverage reports in the specified directory
};
