import express from "express";
const userRouter = express.Router();

userRouter.get("/");

userRouter.get("/:userId");

userRouter.get("/:userId/posts");

export default userRouter;
