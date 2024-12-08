// routes/temples.js
const express = require("express");
const router = express.Router();
const Temple = require("../models/Temple");

router.get("/gettemples", async (req, res) => {
  try {
    const temples = await Temple.find();
    res.json(temples);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// POST: Create a new temple
router.post("/createtemple", async (req, res) => {
  try {
    const { name, description, image, renovationCost } = req.body;

    // Check if all required fields are present
    if (!name || !description || !image || !renovationCost) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save the temple
    const temple = new Temple({
      name,
      description,
      image,
      renovationCost,
    });

    const savedTemple = await temple.save(); // Await here
    res.status(201).json(savedTemple);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
