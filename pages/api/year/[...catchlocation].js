const {
    allRoutes,
    allYears,
    allLocationsID,
    allYearsAllLocation,
  } = require('../api-data.js');

export default async (req, res) => {
    console.log(req.query);
  
    if (!req.query.catchlocation) {
      res.status(404).json('please input year and location parameter in the url');
    }
  
    let yearAndLocationData = allYearsAllLocation.flatMap((x) => x.year === req.query.catchlocation[0] ? x.allContinents.flatMap((y) => y.continent === req.query.catchlocation[2] ? y.events : []) : []);
  
    // lint for invalid query or non-existent data
    yearAndLocationData.length === 0 ? res.status(404).json("requested data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(yearAndLocationData);
  
  }