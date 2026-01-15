const API_URL = "http://localhost:4500/api/auth";

export async function register(credentials) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error((await response.json()).message);
  return response.json();
}

export async function login(credentials) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error((await response.json()).message);
  return response.json();
}

export async function logout() {
  await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function getCurrentUser() {
  const response = await fetch(`${API_URL}/me`, {
    credentials: "include",
  });

  if (!response.ok) throw new Error("Not logged in");

  return response.json();
}
