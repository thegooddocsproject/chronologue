const {
    allYearsAllLocation,
  } = require('./api-data.js');
  
  //rewriting for next.js api routes
  export default async (req, res) => {
    let proc = allYearsAllLocation.flatMap((each)=> each.allContinents);
    res.status(200).send(proc);
  }
  