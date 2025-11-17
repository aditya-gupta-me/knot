const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT;

app.use(cors());

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

app.get("/register", (req, res) => {
  res.status(200).json({ message: "here' some response back!" });
});

// server listening
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
