import { Link } from "react-router-dom";

export default function PostCard({ title, body, _id }) {
  return (
    <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 bg-white">
      <h1 className="text-2xl mb-3 text-gray-800 font-bold">{title}</h1>
      <div className="mb-6 text-gray-600 line-clamp-3">{body}</div>
      <Link to={`/posts/${_id}`}>
        <button className="bg-blue-950 px-6 py-2 text-white rounded-lg cursor-pointer hover:bg-blue-900 transition-colors font-semibold ">
          View
        </button>
      </Link>
    </div>
  );
}
