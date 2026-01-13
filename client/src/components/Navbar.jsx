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
    <nav className="flex bg-blue-950 text-white justify-around items-center">
      <h3 className="font-medium text-[2.25rem]">Blog App</h3>
      <ul className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <div className="flex gap-6">
        {user ? (
          <>
            <span>Welcome, {user.username || "User"}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-blue-900 bg-white px-4.5 py-2 cursor-pointer rounded-xl">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-blue-200 bg-transparent px-4 py-1.5 cursor-pointer rounded-xl border-2 border-blue-200">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
