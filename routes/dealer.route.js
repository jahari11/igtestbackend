const express = require('express');
const router = express.Router();
const dealerController = require('../controller/dealer.controller');

const upload = require('../ware/multerSetup');

const path = require("path");
const fs = require("fs");

router.post('/create', upload.single('profileImage'), dealerController.createDealer);
router.get('/getAll', dealerController.getAllDealers);
router.get('/get/:id', dealerController.getDealerById);
router.put('/update/:id', dealerController.updateDealerById);
router.delete('/delete/:id', dealerController.deleteDealerById);



module.exports = router;
