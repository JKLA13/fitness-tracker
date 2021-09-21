//require modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// need to setup db on server
const db = require("./models");
const app = express();
require("dotenv");

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoose db connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// need routes for api and homepage
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

// Listen on port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
