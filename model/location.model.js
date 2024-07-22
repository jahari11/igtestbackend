
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String},
  link: { type: String },
  address:{ type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

module.exports = mongoose.model('Location', locationSchema);
