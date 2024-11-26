const axios = require('axios');
require('dotenv').config();

// Define the interval (in seconds) and the URL
const URL = 'http://localhost:8000/delete/twenty-four';
const INTERVAL = 5; // Default to 5 seconds if not set in .env

// Function to make the API call
const makeApiCall = async () => {
  try {
    const response = await axios.delete(URL);
    console.log(`[SUCCESS]:`, response.data);
  } catch (error) {
    console.error(`[ERROR]:`, error.message);
  }
};

// Start the interval loop
setInterval(makeApiCall, INTERVAL * 1000);

console.log(`Making API calls to ${URL} every ${INTERVAL} seconds.`);
