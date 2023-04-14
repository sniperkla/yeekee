const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lotterySchema = new Schema(
  {
    name: String,
    round: Number,
    date: String,
    upper3: String,
    below2: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("yeekee", lotterySchema, "yeekee");
