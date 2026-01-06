import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    authorId: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default Post = mongoose.model("Post", postSchema);
