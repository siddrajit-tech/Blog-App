import express from "express";
const authRouter = express.Router();

import {
  getCurrentUser,
  login,
  register,
} from "../controllers/authControllers";
import { authenticate } from "../middleware/auth.js";

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", authenticate, getCurrentUser);

export default authRouter;
