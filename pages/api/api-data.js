/**
 * for both year + location resources url
 * country
 * year
 *
 * all Location + 1 year event data
 * all years + 1 country event data
 * all year + all Location event data
 */

// standardize date format
/**
 * 
 * @param {string} date YYYY-MM-DD
 * @returns {string}
 */
const formatDateToISOString = (date) => {
  let defaultDateFormat = new Date(date);
  let isoDateString = defaultDateFormat.toISOString();

  return isoDateString;
};

// in case we need to reconvert ISO strings back to locale date format
const formatUTCDatetoLocale = (date) => {
  let sentIsoDate = date.replace(/-/g, "/").replace(/T.+/, "");
  let toLocaleDateString = new Date(sentIsoDate).toLocaleDateString();
  console.log(toLocaleDateString);
  return toLocaleDateString;
};

// All API data lives in this object. Please take great care of it :)
const apiData = require('../../data/data.json')

// all year + all Location. Current source of truth for API calls
let allYearsAllLocation = [...apiData];

// GET all location data
let allLocationsID = apiData.flatMap((x)=> x.allContinents ).map((y)=> y.continent);

// GET all year data
let allYears = apiData.map((year)=> year.year);

// GET all available API routes
let allRoutes = [
  { locations: "/all-locations-id" },
  { years: "/all-years-id" },
  { locationAndYears: "/year/:year-id/location/:location-id" },
];

module.exports = {
  allYearsAllLocation,
  allLocationsID,
  allYears,
  allRoutes,
  formatDateToISOString,
  formatUTCDatetoLocale
}