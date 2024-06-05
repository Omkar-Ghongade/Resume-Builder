import React from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function AboutUs({ onEdit, onDelete, onAdd }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Omkar Ghongade</h1>
      <div className="mt-2 flex space-x-4 text-lg">
        <span>+91 9172716327</span>
        <span>•</span>
        <span>omkarsubhashghongade21@gmail.com</span>
        <span>•</span>
        <a href="https://linkedin.com/in/your-profile" className="text-blue-500">LinkedIn</a>
        <span>•</span>
        <a href="https://github.com/your-username" className="text-blue-500">GitHub</a>
        <span>•</span>
        <a href="https://scholar.google.com/citations?user=your-google-scholar-id" className="text-blue-500">GScholar</a>
      </div>
    </div>
  );
}
