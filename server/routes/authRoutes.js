import express from "express";
const authRouter = express.Router();

import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controllers/authControllers.js";
import { authenticate } from "../middleware/auth.js";

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", authenticate, getCurrentUser);

export default authRouter;
