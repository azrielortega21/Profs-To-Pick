// import mongoose module for schema modelling
const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema(
  {
    instructorID: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    dlsuEmail: {
      type: String,
      required: true,
    },

    college: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    timestamp: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

// implement instructor schema as instructor model
const InstructorModel = mongoose.model('Instructor', InstructorSchema);

// export instructor model for data creation and manipulation
export default InstructorModel;
