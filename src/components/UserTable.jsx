import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./pagination";
import EditUser from "./EditUser";
import DeleteConfirmationModal from "./DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const fetchDataFromApi = async (setData) => {
  try {
    // const response = await axios.get("https://jsonplaceholder.org/users");
    const response = await axios.get("/data.json");

    setData(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const itemsPerPage = 10;

  useEffect(() => {
    fetchDataFromApi(setUsers);
  }, []);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditUser = (user) => {
    setEditingUser({ ...user });
  };

  const handleSaveEdit = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? { ...user, ...editedUser } : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const handleDeleteUser = (user) => {
    setDeletingUser(user);
  };

  const handleConfirmDelete = () => {
    const updatedUsers = users.filter((user) => user.id !== deletingUser.id);
    setUsers(updatedUsers);
    setDeletingUser(null);
    setSuccessMessage("The entry has been deleted successfully.");
  };

  const handleCancelDelete = () => {
    setDeletingUser(null);
  };

  const handleSuccessDismiss = () => {
    setSuccessMessage("");
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="table-fixed min-w-full bg-gray-900">
          <thead>
            <th className="py-2 text-left pl-8">ID</th>
            <th className="py-2 text-left">First Name</th>
            <th className="py-2 text-left">Last Name</th>
            <th className="py-2 text-left">Email</th>
            <th className="py-2 text-left">Phone</th>
            <th className="py-2 text-left">Birth Date</th>
            <th className="py-2 text-center">Edit</th>
            <th className="py-2 text-center">Delete</th>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id}>
                <td className="py-2 text-left pl-8">{user.id}</td>
                <td className="py-2 text-left">{user.firstname}</td>
                <td className="py-2 text-left">{user.lastname}</td>
                <td className="py-2 text-left">{user.email}</td>
                <td className="py-2 text-left">{user.phone}</td>
                <td className="py-2 text-left">{user.birthDate}</td>
                <td className="py-2">
                  <button
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => handleEditUser(user)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
                <td className="py-2">
                  <button
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {editingUser && (
        <EditUser
          user={editingUser}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
      <DeleteConfirmationModal
        isOpen={deletingUser !== null}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        onSuccess={handleSuccessDismiss}
      />
      {successMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <p className="text-lg mb-4">{successMessage}</p>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md"
              onClick={handleSuccessDismiss}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
