import { Link } from "react-router-dom";

export default function PostCard({ title, body, _id, authorId, createdAt }) {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-semibold ">
          {authorId.username.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{authorId.username}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>
      <h1 className="text-xl mb-4 text-gray-800 font-bold">{title}</h1>
      <div className="text-gray-600 mb-4 wrap-break-word line-clamp-3 leading-relaxed">
        {body}
      </div>
      <div className="mt-auto">
        <Link to={`/posts/${_id}`}>
          <button className="bg-blue-950 px-5 py-2 text-white rounded-lg cursor-pointer hover:bg-blue-900 transition-colors font-semibold ">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
