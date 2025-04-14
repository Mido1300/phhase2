import { useState } from "react";
import UserCard from "./UserCard";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  // State to manage users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);
  
  // State for selected user (for profile view)
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  // Function to select a user for the profile view
  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        User Dashboard
      </h1>
      
      {/* Grid layout for dashboard sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Cards Section */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">User Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users.map((user) => (
              <UserCard key={user.id} user={user} onSelect={selectUser} />
            ))}
          </div>
        </div>

        {/* User Form Section */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add User</h2>
          <UserForm addUser={addUser} />
        </div>
      </div>

      {/* User List Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">User List</h2>
        <UserList users={users} />
      </div>

      {/* User Profile Section */}
      {selectedUser && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">User Profile</h2>
          <UserProfile user={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;