const axios = require('axios');

// API Test Scenario: Verify GET request status code
async function testGetRequest() {
    try {
        // Make a GET request to a demo API (e.g., https://reqres.in/)
        const response = await axios.get('https://reqres.in/api/users/2');
        
        // Validate if the status code is 200
        if (response.status === 200) {
            console.log('Test passed: Status code is 200');
        } else {
            console.log(`Test failed: Expected status 200, got ${response.status}`);
        }
    } catch (error) {
        console.error('Error making GET request:', error);
    }
}

// Run the test
testGetRequest();
