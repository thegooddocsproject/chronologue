const {
  allRoutes
} = require('./api-data.js');

//rewriting for next.js api routes
export default async (req, res) => {
  res.status(200).json(allRoutes);
}

