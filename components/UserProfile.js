const UserProfile = ({ user }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {user.name}'s Profile
      </h3>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Role:</span> {user.role}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">ID:</span> {user.id}
      </p>
    </div>
  );
};

export default UserProfile;