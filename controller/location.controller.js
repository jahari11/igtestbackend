const Location = require('../model/location.model');

exports.createLocation = async (req, res) => {

  console.log("req.body", req.body)
  try {
    const { name, link, latitude, longitude, address } = req.body;

    const location = await Location.create({ name, link, latitude, longitude, address });
    res.status(201).json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLocationById = async (req, res) => {
  try {
    const { name, link, latitude, longitude, address } = req.body;
    const location = await Location.findByIdAndUpdate(
      req.params.id,
      { name, link, latitude, longitude, address },
      { new: true }
    );
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLocationById = async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ message: 'Location deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
