const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const upload = require('../ware/multerSetup');

const path = require("path");
const fs = require("fs");

router.post('/register', upload.single('profileImage'), userController.register);





router.post('/login', userController.login);

router.put('/edit/:id', userController.edit);
router.delete('/delete/:id', userController.delete);

router.get('/getall', userController.getAll);


router.get('/getImage/:profileName', (req, res) => {
  const profileName = req.params.profileName;
  const imagePath = `${profileName}`;
  const filePath = path.join(__dirname, "..","assets", "uploads", imagePath);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found");
  }
  // serveImage(req, res, imagePath);
});


module.exports = router;
