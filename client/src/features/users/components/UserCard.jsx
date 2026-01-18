export default function UserCard({ email, username }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <p>{username} </p>
      <p>{email}</p>
    </div>
  );
}
