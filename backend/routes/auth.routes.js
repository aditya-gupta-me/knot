import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";
import { verifySignUp } from "../middlewares/index.js";

const router = express.Router();

// signup Route
router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  signup
);

// signin Route
router.post("/signin", signin);

export default router;
