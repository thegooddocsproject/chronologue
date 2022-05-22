const {
    allYearsAllLocation,
  } = require('../api-data.js');

export default (req, res) => {
    console.log(req.query.year);
  
    if (!req.query.year) {
      res.status(404).json("requested data not found. Enter a year or reference all available years in the API doc");
    }
  
    let yearlyDataOnly = allYearsAllLocation.flatMap((data)=> data.year === req.query.year? data.allContinents : []);
  
    // error handling for invalid route
    yearlyDataOnly.length === 0 ? res.status(404).json("requested data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(yearlyDataOnly);
  }