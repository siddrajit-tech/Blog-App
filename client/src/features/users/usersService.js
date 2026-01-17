const API_URL = "http://localhost:4500/api/users";

export async function getUsers() {
  const response = await fetch(`${API_URL}`);
  return response.json();
}

export async function getUser(id) {
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
