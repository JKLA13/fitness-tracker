// require mods

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up schema for db
const exerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    // () => {
    //   new Date();
    // },
  },
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
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// export models
const Workout = mongoose.model("Workout", exerciseSchema);
module.exports = Workout;
