import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  getPost,
} from "../controllers/postControllers";
const postRouter = express.Router();

postRouter.route("/").get(getAllPosts).post(createPost);
postRouter.route("/:id").get(getPost).put(editPost).delete(deletePost);

export default postRouter;
