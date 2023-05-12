// index2.js
const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) =>{
    printPassTime(passTimes);

  }).catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTime = (passTimes) => {
  
  passTimes.forEach(element => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    console.log(`Next pass at ${datetime} for ${element.duration} seconds!`);
    
  });
};