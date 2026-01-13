import { getPost, getPosts } from "./postsService";

export async function postsLoader() {
  const posts = await getPosts();
  return posts;
}

export async function postLoader({ params }) {
  const post = await getPost(params.id);
  console.log(post);

  return post;
}
