import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./models/index.js";
import loginRoute from "./routes/loginRoute.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoute);

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

const initializeRoles = async () => {
  const roles = ["user", "moderator", "admin"];
  for (const role of roles) {
    await db.role.findOrCreate({
      where: { name: role },
    });
  }
};

// server listening
db.sequelize.sync().then(async () => {
  await initializeRoles();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
});
