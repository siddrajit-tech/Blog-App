import { getUser, getUsers } from "./usersService";

export async function usersLoader() {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    console.error("Error fetching users", error);
    return error;
  }
}

export async function usersoader({ params }) {
  try {
    const user = await getUser(params.id);
    return user;
  } catch (error) {
    console.error("Error fetching user", error);
    return error;
  }
}
