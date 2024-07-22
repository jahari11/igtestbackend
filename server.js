const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const locationRoutes = require("./routes/location.route");
const dealerRoutes = require("./routes/dealer.route");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} - ${req.method} ${req.originalUrl}`
  );
  next();
});

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/user", userRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/dealer", dealerRoutes);

app.get('/', (req, res) => {
  res.send('Server up')
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
