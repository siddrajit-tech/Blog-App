import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { AlertCircle, Loader2 } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
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
      await login(form);
      navigate("/posts");
    } catch (error) {
      setError(error.message || "Login failed. Please try again");
      setForm((f) => ({ ...f, password: "" }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-slate-50 justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white px-6 py-10 w-full max-w-md h-auto shadow-lg border border-slate-200 rounded-2xl"
      >
        <div className="text-center">
          <h1 className="font-bold text-blue-950 text-3xl mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600 block mb-6">Login to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

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
          className="bg-blue-950 rounded-lg text-white p-3 font-medium mb-3"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        <div>
          <p className="text-center">
            <span className="text-gray-600">Dont have an account? </span>
            <Link
              className="font-medium text-blue-950 hover:underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
