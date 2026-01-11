import { getPosts } from "./postsService";

export async function postsLoader() {
  const posts = await getPosts();
  return posts;
}
