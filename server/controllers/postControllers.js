import Post from "../models/Post.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find()
      .populate("authorId", "username email")
      .sort({ createAt: -1 });
    res.status(200).json({
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching posts", error);
    res.status(500).json({
      message: "Server error fetching posts",
    });
  }
}

export async function getPost(req, res) {
  try {
    const id = req.params.id;
    const post = await Post.findById(id)
      .populate("authorId", "username email")
      .sort({ createAt: -1 });

    if (!post)
      return res.status(404).json({
        message: "Post not found",
      });

    res.status(200).json({
      message: "Post fetched successfully",
      data: post,
    });
  } catch (error) {
    console.error("Error fetching post", error);
    res.status(500).json({
      message: "Server error fetching post",
    });
  }
}

export async function createPost(req, res) {
  try {
    const { title, body } = req.body;

    if (!title || !body)
      return res.status(400).json({
        message: "All feilds are required",
      });

    const newPost = await Post.create({
      title,
      body,
      authorId: req.user._id,
    });

    res.status(201).json({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    console.error("Error creating post", error);
    res.status(500).json({
      message: "Server error creating post",
    });
  }
}

export async function editPost(req, res) {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    const { title, body } = req.body;

    if (!post)
      return res.status(404).json({
        message: "Post not found",
      });

    if (post.authorId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized to edit post",
      });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, body },
      { new: true },
    );

    res.status(200).json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post", error);
    res.status(500).json({
      message: "Server error updating post",
    });
  }
}

export async function deletePost(req, res) {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    if (!post)
      return res.status(404).json({
        message: "Post not found",
      });

    if (post.authorId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized to delete post",
      });
    }

    await Post.findByIdAndDelete(id);

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting post", error);
    res.status(500).json({
      message: "Server error deleting post",
    });
  }
}
