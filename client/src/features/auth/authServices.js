const API_URL = "http://localhost:4500/api";

export async function getCurrentUser() {
  const response = await fetch(`${API_URL}/auth/me`, {
    credentials: "include",
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Expired or invalid token");
  }
}
