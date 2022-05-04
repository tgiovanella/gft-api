const mongoose = require("mongoose");

const checkingSchema = new mongoose.Schema(
  {
    userId: Number,
    dateCheckin: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "gft" }
);

module.exports = mongoose.model("checkin", checkingSchema, "Checkin");
