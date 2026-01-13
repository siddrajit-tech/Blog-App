const API_URL = "http://localhost:4500/api";

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}

export async function getPost(id) {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Error in service: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
