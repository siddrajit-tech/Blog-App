import { Link, useLoaderData } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Posts() {
  const data = useLoaderData();
  const posts = data.data;
  console.log(posts);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Posts</h1>
          <Link to="/posts/new">
            <button className="text-blue-900 bg-transparent px-6 py-2 cursor-pointer rounded-lg border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-colors font-semibold">
              New
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            return <PostCard key={post._id} {...post} />;
          })}
        </div>
      </div>
    </div>
  );
}
