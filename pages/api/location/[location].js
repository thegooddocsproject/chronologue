const {
    allRoutes,
    allYears,
    allLocationsID,
    allYearsAllLocation,
  } = require('../api-data.js');

  export default async (req, res) => {
    console.log(req.query);
  
    const locationEventData = allYearsAllLocation.map((x) => {
      return {
        year: x.year,
        events: x.allContinents.flatMap((y) => y.continent === req.query.location ? y.events : []),
        };
      },
    );
    
    res.status(200).json(locationEventData);
  }