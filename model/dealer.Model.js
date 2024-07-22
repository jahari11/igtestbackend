const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  dealer_name: { type: String  },
  dealer_location: { type: String },
  dealer_description: { type: String  },
  dealer_rating: { type: String },
  dealer_insta: { type: String },
  dealer_twi: { type: String },
  dealer_address: { type: String },
  profileName: { type: String },
 
});

const Dealer = mongoose.model('Dealer', dealerSchema);

module.exports = Dealer;
