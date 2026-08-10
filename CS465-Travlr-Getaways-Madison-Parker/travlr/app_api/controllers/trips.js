const Trip = require('../models/travlr');

// GET /api/trips
// Returns every trip stored in MongoDB.
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (!Array.isArray(trips) || trips.length === 0) {
      return res.status(404).json({ message: 'No trips were found.' });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET /api/trips/:tripCode
// Uses the trip code from the route to return one matching trip.
const tripsFindByCode = async (req, res) => {
  try {
    const trips = await Trip.find({ code: req.params.tripCode }).exec();

    if (!Array.isArray(trips) || trips.length === 0) {
      return res.status(404).json({
        message: `No trip was found with code ${req.params.tripCode}.`
      });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
