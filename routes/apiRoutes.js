// require mods, routes
const path = require("path");
const express = require("express");
const router = express.Router();
const db = require("../models");

//get routes
//get workouts api call
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
//get work out range api call
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
router.post("api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});
//put routes

//export routes
module.exports = router;
