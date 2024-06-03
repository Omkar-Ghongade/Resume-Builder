import React from 'react';
import { FaEdit, FaTrash, FaGripVertical } from 'react-icons/fa';

export default function Skills({ onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 mb-4 rounded">
      <div className="cursor-pointer">
        <FaGripVertical />
      </div>
      <div className="flex-grow ml-4">
        <h1 className="text-xl font-bold">Skills</h1>
        <p>This is the Skills section content.</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
          <FaEdit />
        </button>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
