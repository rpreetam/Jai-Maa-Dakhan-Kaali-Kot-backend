// models/Donation.js
const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  fullName: String,
  // email: String,
  // mobileNumber: String,
  amount: Number,
   templeId: { type: mongoose.Schema.Types.ObjectId, ref: "Temple" },
});

module.exports = mongoose.model("Donation", DonationSchema);
