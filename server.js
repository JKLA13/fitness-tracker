//require modules
const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// need to setup db on server

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// need routes for api and homepage
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
