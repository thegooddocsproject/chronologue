const {
    allYearsAllLocation,
  } = require('./api-data.js');
  
  let proc = allYearsAllLocation.flatMap((each)=> each.allContinents)
  //rewriting for next.js api routes
  export default async (req, res) => {
    res.status(200).json(proc);
  }
  