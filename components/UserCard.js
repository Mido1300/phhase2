const UserCard = ({ user, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(user)}
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">Role: {user.role}</p>
    </div>
  );
};

export default UserCard;