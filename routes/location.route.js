  const express = require('express');
  const router = express.Router();
  const locationController = require('../controller/location.controller');

  router.post('/create', locationController.createLocation);
  router.get('/getAll', locationController.getAllLocations);
  router.get('/get/:id', locationController.getLocationById);
  router.put('/update/:id', locationController.updateLocationById);
  router.delete('/delete/:id', locationController.deleteLocationById);

  module.exports = router;
