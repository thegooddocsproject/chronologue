const {
    allYearsAllLocation,
  } = require('./api-data.js');
  
  //rewriting for next.js api routes
  export default async (req, res) => {
    /**
     * TODO
     * traverse and merge all 2d arrays
     * all objects have continent key, event name, date key
     */
    let filtered = [];

    allYearsAllLocation.forEach((item)=> {
      item.allContinents.forEach((v)=> {
        v.events.forEach((b)=> b.continent = v.continent)
        filtered.push(v.events)
      })
      
    })
    let flattened = filtered.flatMap((item)=> [...item])
    console.log(flattened);

    res.status(200).json(flattened);
  }
  