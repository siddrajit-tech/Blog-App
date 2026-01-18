import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";

export default function Users() {
  const data = useLoaderData();
  console.log(data);
  const users = data.data;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8 mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {users.map((user) => {
            return <UserCard key={user.id} {...user} />;
          })}
        </div>
      </div>
    </div>
  );
}
