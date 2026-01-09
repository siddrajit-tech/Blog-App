import express from "express";
import {
  getAllUsers,
  getUser,
  getUserPosts,
} from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUser);

userRouter.get("/:id/posts", getUserPosts);

export default userRouter;
