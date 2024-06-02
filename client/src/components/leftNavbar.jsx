import React, { useState } from 'react';
import { FaPlus, FaBars } from 'react-icons/fa';

export default function LeftNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clearCache = () => {
    localStorage.clear();
    window.location.reload();
  };

  const downloadResume = () => {
    console.log('Downloading resume...');
  }

  return (
    <div>
      <div className="h-16 w-full fixed top-0 left-0 bg-gray-800 text-white flex justify-between items-center px-4 lg:hidden">
        <span className="text-xl">Menu</span>
        <button onClick={toggleMenu} className="text-white">
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      <div className={`h-full w-64 fixed top-0 left-0 bg-gray-800 text-white flex flex-col p-4 space-y-6 transition-transform transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {['About Me', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((name) => (
          <div key={name} className="w-full">
            <button className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-700 rounded border border-gray-600 text-lg">
              <span>{name}</span>
              <FaPlus className="h-6 w-6" />
            </button>
          </div>
        ))}
        <div className="mt-auto space-y-4">
          <button
            onClick={downloadResume} 
            className="w-full flex justify-center items-center py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded text-lg text-white">
            Download Resume
          </button>
          <button
            onClick={clearCache}
            className="w-full flex justify-center items-center py-3 px-4 bg-red-600 hover:bg-red-700 rounded text-lg text-white"
          >
            Clear Cache
          </button>
        </div>
        <div className="text-center text-sm">
          <span>Builder - </span>
          <a href="https://www.linkedin.com/in/omkar-ghongade/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            Omkar Ghongade
          </a>
        </div>
      </div>
    </div>
  );
}
