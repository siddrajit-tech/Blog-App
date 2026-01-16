import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { AlertCircle, Loader2 } from "lucide-react";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (error) setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await register(form);
      navigate("/posts");
    } catch (error) {
      setError(error.message || "Registration failed. Please try again");
      setForm((f) => ({ ...f, password: "" }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-slate-50 justify-center items-center my-7">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white px-6 py-10 w-full max-w-md h-auto shadow-lg border border-slate-200 rounded-2xl"
      >
        <div className="text-center">
          <h1 className="font-bold text-blue-950 text-3xl mb-2">
            Create An Account
          </h1>
          <p className="text-slate-600 block mb-6">Join the community</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <div>
          <label
            className="block font-medium text-slate-700 mb-2"
            htmlFor="username"
          >
            Full Name
          </label>
          <input
            placeholder="John Doe"
            className=" border-gray-300 border w-full px-4 py-3 rounded-lg mb-6"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="">
          <label
            className="block font-medium text-slate-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" border-gray-300 border w-full px-4 py-3 rounded-lg mb-6"
            name="email"
            type="email"
            onChange={handleChange}
            value={form.email}
            placeholder="example@gmail.com"
            disabled={loading}
          />
        </div>
        <div>
          <label
            className="block font-medium text-slate-700 mb-2"
            htmlFor="email"
          >
            Password
          </label>
          <input
            placeholder="••••••••"
            className=" border-gray-300 border w-full px-4 py-3 rounded-lg mb-6"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <button
          className="bg-blue-950 rounded-lg text-white p-3 font-medium mb-3 hover:bg-blue-900 cursor-pointer transition"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Registering...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        <div>
          <p className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              className="font-medium text-blue-950 hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
