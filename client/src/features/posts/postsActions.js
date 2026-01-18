import { redirect } from "react-router-dom";
import { createPost, editPost } from "./postsService";

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
    console.log(error);
    return { error: error.message };
  }
}

export async function editPostAction({ request, params }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  try {
    await editPost(params.id, post);
    return redirect(`/posts/${params.id}`);
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
}
