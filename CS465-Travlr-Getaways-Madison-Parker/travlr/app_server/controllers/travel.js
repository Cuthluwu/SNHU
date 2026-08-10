const fs = require('fs');
const path = require('path');

/* Read the prototype trip data from JSON. */
const tripsPath = path.join(__dirname, '..', '..', 'data', 'trips.json');
const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

/* GET travel view. */
const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips
  });
};

module.exports = {
  travel
};
