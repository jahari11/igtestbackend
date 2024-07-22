const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String },
  profileName: { type: String },
  role: { type: String },
  profileImage: {
    type: String,
    name: String,
    data: Buffer,
  },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
