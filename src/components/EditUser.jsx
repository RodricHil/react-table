// src/components/EditUser.jsx
import React, { useState } from "react";

const EditUser = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl mb-4">Edit User</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={editedUser.firstname}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 text-black	 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={editedUser.lastname}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 text-black	 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 text-black	 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 text-black	rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              BirthDate
            </label>
            <input
              type="text"
              name="birthDate"
              value={editedUser.birthDate}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 text-black	 rounded-md w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 mr-2 bg-gray-600 text-white rounded-md"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
