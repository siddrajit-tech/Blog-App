import { useLoaderData } from "react-router-dom";

export default function Posts() {
  const data = useLoaderData();
  const posts = data.data;
  console.log(posts);

  return (
    <div>
      <h1>
        {posts.map((post) => {
          return <li key={post._id}>{post.title}</li>;
        })}
      </h1>
    </div>
  );
}
