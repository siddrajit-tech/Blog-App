import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await register(form);
    navigate("/posts");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input name="username" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" onChange={handleChange} />
      <label htmlFor="email">Password</label>
      <input name="password" type="password" onChange={handleChange} />
      <button className="bg-blue-900 text-white">Register</button>
    </form>
  );
}
