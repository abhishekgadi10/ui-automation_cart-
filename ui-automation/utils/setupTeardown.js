async function setup(page) {
    console.log('Test setup initiated');
}

async function teardown(page) {
    if (page) {
        await page.close();
    }
    console.log('Test teardown completed');
}

module.exports = { teardown };


module.exports = { setup, teardown };
