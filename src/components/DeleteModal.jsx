// src/components/DeleteConfirmationModal.jsx
import React from "react";

const DeleteConfirmationModal = ({
  isOpen,
  onCancel,
  onConfirm,
  onSuccess,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleConfirm = () => {
    onConfirm();
    onSuccess();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <p className="text-lg mb-4">
          Are you sure you want to delete this entry?
        </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-600 text-white rounded-md"
            onClick={onCancel}
          >
            No
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={handleConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
