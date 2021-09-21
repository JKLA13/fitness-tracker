// require mods

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up schema for db
const exerciseSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter a type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter the name of exercise.",
      },
      duration: {
        type: Number,
        required: "Please enter duration of exercise.",
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

// export models
const Workout = mongoose.model("Workout", exerciseSchema);
module.exports = Workout;
