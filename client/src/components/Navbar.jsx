import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="flex sticky bg-blue-950 text-white justify-between items-center shadow-lg py-2 px-15 w-full">
      <div className="flex gap-10 items-center">
        <h3 className="font-medium text-[2.25rem]">Blog App</h3>
        <ul className="flex gap-6 text-lg">
          <li className="hover:underline focus:underline focus:outline-none">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-6">
        {user ? (
          <div className="flex gap-6 items-center">
            <span>Welcome, {user.user.username}</span>
            <button
              onClick={handleLogout}
              className="text-blue-950 bg-white px-4.5 py-2 cursor-pointer rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="text-blue-900 bg-white px-4.5 py-2 cursor-pointer rounded-lg">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-blue-100 bg-transparent px-4 py-1.5 cursor-pointer rounded-lg border-2 border-blue-50">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
