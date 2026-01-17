const API_URL = "http://localhost:4500/api/posts";

export async function getPosts() {
  const response = await fetch(`${API_URL}`);
  return response.json();
}

export async function getPost(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error in service: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function createPost(postData) {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(`Error in service: ${response.status}`);
  }

  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to delete posts");
  }

  return response.json();
}
