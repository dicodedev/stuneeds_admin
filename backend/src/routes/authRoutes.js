import express from "express";

import {
  createUser,
  getAllUser,
  loginUser,
} from "../controllers/authController.js";
import loggedInUser from "../middlewares/loggedInUser.js";

const router = express.Router();

router.get("/", [loggedInUser], getAllUser);

router.post("/login", loginUser);

export default router;
