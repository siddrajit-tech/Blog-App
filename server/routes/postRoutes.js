import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  getPost,
} from "../controllers/postControllers.js";
import { authenticate } from "../middleware/auth.js";
const postRouter = express.Router();

postRouter.route("/").get(getAllPosts).post(authenticate, createPost);
postRouter
  .route("/:id")
  .get(getPost)
  .put(authenticate, editPost)
  .delete(authenticate, deletePost);

export default postRouter;
