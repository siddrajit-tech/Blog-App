import { useLoaderData } from "react-router-dom";

export default function Post() {
  const data = useLoaderData();
  console.log(data);

  const post = data.data;

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
