// require mods, routes
const path = require("path");
const express = require("express");
const router = express.Router();
const db = require("../models");

//get routes
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
//post routes

//put routes

//export routes
module.exports = router;
