// routes/donations.js
const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

router.post("/adddonation", async (req, res) => {
try {
  console.log(req.body);

  const {fullName , amount} = req.body
 // Check if all required fields are present
 if (!fullName || !amount) {
  return res.status(400).json({ error: "All fields are required" });
};

const donation = new Donation({
  fullName,
  amount
});
const savedDonation =  await donation.save();
res.status(201).json(savedDonation);

} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
});

router.get("/getdonations", async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
