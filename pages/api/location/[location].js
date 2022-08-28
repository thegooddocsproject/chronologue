const {
  allYearsAllLocation,
  formatDateToISOString,
} = require("../api-data.js");

export default async (req, res) => {
  
  const extract = allYearsAllLocation.flatMap((r)=> r.allContinents).flatMap((l)=> l.continent === req.query.location ? l.events : [] )
  
  const locationEventData = extract.map((n) => {
    return {
          eventName: n.event,
          dateName: formatDateToISOString(n.date),
          imageName: n.image,
          videoName: n.video,
          linkName: n.links
        }
      })

  res.status(200).json(locationEventData);
};
