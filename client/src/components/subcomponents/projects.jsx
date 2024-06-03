import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function projects({ onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>Projects</h1>
        <p>This is the Projects section content.</p>
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
