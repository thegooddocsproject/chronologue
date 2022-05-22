const {
    allYears,
  } = require('./api-data.js');

export default async (req, res) => {
    res.status(200).json(allYears);
  }