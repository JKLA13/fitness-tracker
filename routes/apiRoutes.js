// require mods, routes
const path = require("path");
const express = require("express");
const router = express.Router();
const db = require("../models");

//get routes
//get workouts api call
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get work out range api call
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

//post routes
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

//put routes
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((workoutDb) => {
      res.json(workoutDb);
    })
    .catch((err) => {
      res.json(err);
    });
});

//export routes
module.exports = router;
