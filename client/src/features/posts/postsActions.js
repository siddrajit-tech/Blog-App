import { redirect } from "react-router-dom";
import { createPost } from "./postsService";

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  try {
    await createPost(post);
    return redirect("/");
  } catch (error) {
    return { error: error.message };
  }
}
