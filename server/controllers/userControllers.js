import User from "../models/User.js";
import Post from "../models/Post.js";

export async function getAllUsers(req, res) {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({
      message: "Server error fetching users",
    });
  }
}

export async function getUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({
      message: "Server error fetching user",
    });
  }
}

export async function getUserPosts(req, res) {
  try {
    const userId = req.params.id;
    const posts = await Post.find({ authorId: userId });

    res.status(200).json({
      message: "User posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching user posts", error);
    res.status(500).json({
      message: "Server error fetching user posts",
    });
  }
}
