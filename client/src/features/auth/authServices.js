const API_URL = "http://localhost:4500/api";

export async function getCurrentUser(token) {
  const response = await fetch(`${API_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Expired or invalid token");
  }
}
