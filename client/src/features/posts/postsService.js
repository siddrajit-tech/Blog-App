const API_URL = "http://localhost:4500/api";

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}
