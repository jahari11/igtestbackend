const multer = require('multer')
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const mainDir = path.join(__dirname, '../assets/uploads/'); 

    if (!fs.existsSync(mainDir)) {
      fs.mkdirSync(mainDir, { recursive: true });
    }
    cb(null, mainDir); 
  },
  filename: (req, file, cb) => { 
    const fieldName = file.originalname;
    const filename = `${fieldName}`;
    cb(null, filename);
  },
});

const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1 GB in bytes

const imageFilter = (req, file, cb) => {
  cb(null, true); // Allow all file types for now
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: MAX_FILE_SIZE,
    fieldSize: MAX_FILE_SIZE,
  },
  fileFilter: imageFilter,
});

module.exports = upload;
