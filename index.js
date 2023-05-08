// index.js
const { fetchMyIP,fetchCoordsByIP } = require('./iss');
// let IP = "192.168.3.3";

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  // IP = ip;

  fetchCoordsByIP(ip,(error, data) => {
    if (error) {
      console.log(" It didn't work well!",error);
      return;
    }
    console.log("It worked! Returned coordinates:",data);
  });
});




