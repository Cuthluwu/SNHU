const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const sendServerError = (res, err) => {
  console.error(err);
  return res.status(500).json({ message: err.message || 'Internal server error' });
};

// GET: /api/trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).sort({ code: 1 }).exec();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return sendServerError(res, err);
  }
};

// GET: /api/trips/:tripCode
const tripsFindByCode = async (req, res) => {
  try {
    const trips = await Trip.find({ code: req.params.tripCode }).exec();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: `Trip ${req.params.tripCode} not found` });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return sendServerError(res, err);
  }
};

// POST: /api/trips
const tripsAddTrip = async (req, res) => {
  try {
    const required = ['code', 'name', 'length', 'start', 'resort', 'perPerson', 'image', 'description'];
    const missing = required.filter((field) => req.body[field] === undefined || req.body[field] === '');
    if (missing.length > 0) {
      return res.status(400).json({ message: `Missing required field(s): ${missing.join(', ')}` });
    }

    const existing = await Trip.findOne({ code: req.body.code }).exec();
    if (existing) {
      return res.status(409).json({ message: `Trip code ${req.body.code} already exists` });
    }

    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return sendServerError(res, err);
  }
};

// PUT: /api/trips/:tripCode
const tripsUpdateTrip = async (req, res) => {
  try {
    const updated = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true }
    ).exec();

    if (!updated) {
      return res.status(404).json({ message: `Trip ${req.params.tripCode} not found` });
    }

    return res.status(201).json(updated);
  } catch (err) {
    return sendServerError(res, err);
  }
};

// DELETE: /api/trips/:tripCode
const tripsDeleteTrip = async (req, res) => {
  try {
    const deleted = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();
    if (!deleted) {
      return res.status(404).json({ message: `Trip ${req.params.tripCode} not found` });
    }
    return res.status(200).json({
      message: `Trip ${req.params.tripCode} deleted`,
      trip: deleted
    });
  } catch (err) {
    return sendServerError(res, err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
