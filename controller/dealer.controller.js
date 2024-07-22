const Dealer = require('../model/dealer.Model');

exports.createDealer = async (req, res) => {

  console.log("req.body", req.body)
  try {
    const { dealer_name, dealer_location,profileName, dealer_description, dealer_rating, dealer_insta,dealer_twi,dealer_address   } = req.body;

    const dealer = await Dealer.create({ dealer_name,profileName, dealer_location, dealer_description, dealer_rating, dealer_insta,dealer_twi,dealer_address   });
    res.status(201).json(dealer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllDealers = async (req, res) => {
  try {
    const dealers = await Dealer.find();
    res.json(dealers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDealerById = async (req, res) => {
  try {
    const dealer = await Dealer.findById(req.params.id);
    if (!dealer) {
      return res.status(404).json({ error: 'Dealer not found' });
    }
    res.json(dealer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDealerById = async (req, res) => {
  try {
    const { name, link, latitude, longitude, address } = req.body;
    const dealer = await Dealer.findByIdAndUpdate(
      req.params.id,
      { name, link, latitude, longitude, address },
      { new: true }
    );
    if (!dealer) {
      return res.status(404).json({ error: 'Dealer not found' });
    }
    res.json(dealer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDealerById = async (req, res) => {
  try {
    const dealer = await Dealer.findByIdAndDelete(req.params.id);
    if (!dealer) {
      return res.status(404).json({ error: 'Dealer not found' });
    }
    res.json({ message: 'dealer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
