require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const mongoDBURL = process.env.mongoDBURL
const cors = require("cors");
const PORT = process.env.PORT
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY

app.use(cors());



app.use('/api/donations', require('./routes/donations'))
app.use('/api/temples', require('./routes/temples'))
app.get("/", (req, res) => {
  res.json("Hello");
})


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
