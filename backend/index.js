const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

// base endpoint
app.get("/", (req, res) => {
  res.send(`Server up and running`);
});

// health-check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    datetime: new Date().toLocaleString(),
    uptime: process.uptime(),
  });
});

// server listening
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
