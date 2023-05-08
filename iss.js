/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const url = "https://api.ipify.org/?format=json";

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(url,(err, response, body) =>{
    // error can be set if invalid domain, user is offline, etc.
    if (err) {
      callback(err, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data
    if (body.length > 0) {
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    } else {
      callback(new Error(`ip not found.`));
    }

  });
};

module.exports = { fetchMyIP };