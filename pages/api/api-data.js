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
let apiData = [
  {
    year: "1781",
    allContinents: [
      {
        continent: "europe",
        country: "null",
        events: [
          {
            event: "Sir William Herschel discovered Uranus",
            date: formatDateToISOString("1781-03-13"),
            image:
              "https://solarsystem.nasa.gov/system/feature_items/images/88_carousel_uranus.jpg",
            video: "https://www.youtube.com/watch?v=hx9VFtqiNM4",
            links: [
              "https://en.wikipedia.org/wiki/Uranus",
              "https://solarsystem.nasa.gov/planets/uranus/overview/",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "1968",
    allContinents: [
      {
        continent: "north-america",
        country: "USA",
        events: [
          {
            event:
              "The Orbiting Astronomical Observatory 2 was the first space telescope launched",
            date: formatDateToISOString("1968-12-07"),
            image: "http://www.sal.wisc.edu/OAO/oao1reg.jpg",
            video: "",
            links: [
              "https://en.wikipedia.org/wiki/Space_exploration#Telescope",
              "http://www.sal.wisc.edu/OAO/",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "1957",
    allContinents: [
      {
        continent: "europe",
        country: "Soviet",
        events: [
          {
            event:
              "The first successful orbital launch of the Soviet uncrewed Sputnik 1 mission",
            date: formatDateToISOString("1957-10-04"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/be/Sputnik_asm.jpg",
            video: "link",
            links: [
              "https://en.wikipedia.org/wiki/Space_exploration#Telescope",
              "https://en.wikipedia.org/wiki/Sputnik_1",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "1961",
    allContinents: [
      {
        continent: "europe",
        country: "Russia",
        events: [
          {
            event:
              "The first successful human spaceflight was Vostok 1, carrying the 27-year-old Russian cosmonaut, Yuri Gagarin",
            date: formatDateToISOString("1961-04-12"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/d/df/Vostok_spacecraft.jpg",
            video: "link",
            links: [
              "https://en.wikipedia.org/wiki/Space_exploration#Telescope",
              "https://en.wikipedia.org/wiki/Vostok_1",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2012",
    allContinents: [
      {
        continent: "north-america",
        country: "USA",
        events: [
          {
            event:
              "Voyager 1 became the first human-made object to leave the Solar System into interstellar space",
            date: formatDateToISOString("2012-08-25"),
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/60/Voyager_spacecraft_model.png",
            video: "link",
            links: [
              "https://en.wikipedia.org/wiki/Space_exploration#Telescope",
              "https://en.wikipedia.org/wiki/Voyager_1",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2016",
    allContinents: [
      {
        continent: "australia",
        country: "australia",
        events: [
          {
            event:
              "European Southern Observatory (ESO) find Proxima b in habitable zone around Proxima Centauri. The long-sought world orbits its cool red parent star every 11 days and has a temperature suitable for liquid water to exist on its surface. ",
            date: formatDateToISOString("2016"),
            image: "https://cdn.eso.org/images/newsfeature/eso1629a.jpg",
            video: "link",
            links: ["https://www.eso.org/public/news/eso1629/"],
          },
        ],
      },
    ],
  },
  {
    year: "2021",
    allContinents: [
      {
        continent: "north-america",
        country: "USA",
        events: [
          {
            event:
              "NASA Perseverance rover landed on Mars to find clues on past microbial life",
            date: formatDateToISOString("2021-02-18"),
            image:
              "https://www.nasa.gov/sites/default/files/thumbnails/image/09_touchdown_10k.jpg",
            video: "link",
            links: [
              "https://www.nasa.gov/press-release/nasa-invites-public-to-share-thrill-of-mars-perseverance-rover-landing",
              "",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2024",
    allContinents: [
      {
        continent: "north-america",
        country: "USA",
        events: [
          {
            event:
              "NASA Artemis mission sending the first woman and man to the Moon by 2024",
            date: formatDateToISOString("2024"),
            image:
              "https://blogs.nasa.gov/artemis/wp-content/uploads/sites/303/2021/10/OrionStacked.jpg",
            video: "link",
            links: [
              "https://www.nasa.gov/specials/artemis/",
              "https://blogs.nasa.gov/artemis/2021/10/20/stacking-operations-for-artemis-i-mission-nearing-completion/",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "3000",
    allContinents: [
      {
        continent: "north-america",
        country: "USA",
        events: [
          {
            event:
              "Light pollution in Europe is so bad, that you can not see stars with the naked eye any more.",
            date: formatDateToISOString("3000"),
            image:
              "https://www.darksky.org/wp-content/uploads/2014/09/Light_Pollution_Diagram_680px.jpg",
            video: "https://www.youtube.com/watch?v=isoJ0XIKDlc",
            links: [
             'https://www.darksky.org/light-pollution/',
             'https://blue-marble.de/nightlights/2012'
            ],
          },
        ],
      },
    ],
  },
];

// all year + all Location
// SHOULD BE A SOURCE OF TRUTH FOR ALL DATA AND API CALLS
exports.allYearsAllLocation = [...apiData];

// GET all location data
exports.allLocationsID = apiData.flatMap((x)=> x.allContinents ).map((y)=> y.continent);

// GET all year data
exports.allYears = apiData.map((year)=> year.year);

// GET all available API routes
exports.allRoutes = [
  { locations: "/all-locations-id" },
  { years: "/all-years-id" },
  { locationAndYears: "/year/:year-id/location/:location-id" },
];
