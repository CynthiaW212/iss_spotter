// index.js
const {nextISSTimesForMyLocation} = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPastTime(passTimes);
});


const printPastTime = (passTimes) => {
  
  passTimes.forEach(element => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    console.log(`Next pass at ${datetime} for ${element.duration} seconds!`);
    
  });
};





