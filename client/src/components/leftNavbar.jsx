import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function LeftNavbar() {
  return (
    <div className="h-full w-64 fixed top-0 left-0 bg-gray-800 text-white flex flex-col p-4 space-y-6">
      {['About Me', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((name) => (
        <div key={name} className="w-full">
          <button className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-700 rounded border border-gray-600 text-lg">
            <span>{name}</span>
            <FaPlus className="h-6 w-6" />
          </button>
        </div>
      ))}
      <div className="mt-auto">
        <button className="w-full flex justify-center items-center py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded text-lg text-white">
          Download Resume
        </button>
      </div>
    </div>
  );
}
