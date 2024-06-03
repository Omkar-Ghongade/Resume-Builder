import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function certifications({ onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>Certifications</h1>
        <p>This is the Certifications section content.</p>
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