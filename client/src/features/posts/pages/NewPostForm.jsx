import { Form, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NewPostForm() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-7">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-bold text-shadow-blue-950">
          Create New Post
        </h1>
        <Link
          to="/"
          className="text-blue-900 font-medium hover:text-blue-800 flex"
        >
          <ArrowLeft className="w-5 h-6" /> Back to posts
        </Link>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <Form method="post">
          <label
            htmlFor="title"
            className="block text-blue-950 font-semibold text-xl mb-2"
          >
            Post Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter your post title..."
            className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-4"
          />
          <label
            htmlFor="body"
            className="block text-blue-950 font-semibold text-xl mb-2"
          >
            Post body
          </label>
          <textarea
            type="text"
            name="body"
            rows={10}
            placeholder="Write your post content..."
            className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-4"
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
            >
              Publish Post
            </button>
            <Link to="/" className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
