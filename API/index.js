const express = require('express');
const app = express();
const port = 8080;
const {
  allRoutes,
  allYears,
  allLocationsID,
  allYearsAllLocation,
} = require('./api-data.js');

//for Netlify Functions 
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.status(200).json(allRoutes);
});

app.get('/all-locations-id', (req, res) => {
  res.status(200).json(allLocationsID);
});

app.get('/all-years-id', (req, res) => {
  res.status(200).json(allYears);
});

app.get('/year/:year', (req, res) => {
  console.log(req.params);

  if (!req.params.year) {
    res.status(404).json("requested data not found. Enter a year or reference all available years in the API doc");
  }

  let yearlyDataOnly = allYearsAllLocation.flatMap((data)=> data.year === req.params.year? data.allContinents : []);

  // error handling for invalid route
  yearlyDataOnly.length === 0 ? res.status(404).json("requested data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(yearlyDataOnly);
});

app.get('/location/:location', (req, res) => {
  console.log(req.params);

  const locationEventData = allYearsAllLocation.map((x) => {
    return {
      year: x.year,
      events: x.allContinents.flatMap((y) => y.continent === req.params.location ? y.events : []),
      };
    },
  );
  
  res.status(200).json(locationEventData);
});

app.get('/year/:year/location/:location', (req, res) => {
  console.log(req.params);

  if (!req.params.location || !req.params.year) {
    res.status(404).json('please input year and location parameter in the url');
  }

  let yearAndLocationData = allYearsAllLocation.flatMap((x) => x.year === req.params.year ? x.allContinents.flatMap((y) => y.continent === req.params.location ? y.events : []) : []);

  // lint for invalid params or non-existent data
  yearAndLocationData.length === 0 ? res.status(404).json("requested data not found. Check your request parameter again or reference the API routes docs") : res.status(200).json(yearAndLocationData);

});

app.listen(port, () => {
  console.log(`Chronologue server API listening at http://localhost:${port}`);
});

module.exports.handler = serverless(app);