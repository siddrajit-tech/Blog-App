import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { deletePost } from "../postsService";

export default function Post() {
  const data = useLoaderData();
  const post = data.data;
  const navigate = useNavigate();
  const date = new Date(post.createdAt);
  const formatedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  async function handleDelete(id) {
    try {
      await deletePost(id);
      navigate("/");
    } catch (error) {
      console.log("Error deleteing posts", error);
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <Link to="/">
        <button className="flex items-center gap-2 text-blue-900 hover:text-blue-700 mb-6 font-medium cursor-pointer transition">
          <ArrowLeft size={20} />
          Back to Posts
        </button>
      </Link>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
          <div className="w-14 h-14 bg-slate-700 text-white rounded-full flex items-center justify-center font-semibold text-xl">
            {post.authorId.username.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">
              {post.authorId.username}
            </p>
            <p className="text-sm text-gray-500">Posted on {formatedDate}</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

        <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-8 wrap-break-word">
          {post.body}
        </div>
        <div className="flex gap-3 pt-6 border-t border-gray-200">
          <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors cursor-pointer">
            Edit Post
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer"
            onClick={() => handleDelete(post._id)}
          >
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
}
