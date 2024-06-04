import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaBars } from 'react-icons/fa';

export default function LeftNavbar({ onMenuClick, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editDeleteVisible, setEditDeleteVisible] = useState({});

  useEffect(() => {
    const savedVisibility = JSON.parse(localStorage.getItem('editDeleteVisible'));
    if (savedVisibility) {
      setEditDeleteVisible(savedVisibility);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleEditDelete = (name) => {
    setEditDeleteVisible(prevState => {
      const newState = {
        ...prevState,
        [name]: !prevState[name]
      };
      localStorage.setItem('editDeleteVisible', JSON.stringify(newState));
      return newState;
    });
  };

  const clearCache = () => {
    localStorage.clear();
    window.location.reload();
  };

  const downloadResume = () => {
    console.log('Downloading resume...');
  };

  const menuItems = [
    'About Me', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications'
  ];

  return (
    <div>
      <div className="h-16 w-full fixed top-0 left-0 bg-gray-800 text-white flex justify-between items-center px-4 lg:hidden">
        <span className="text-xl">Menu</span>
        <button onClick={toggleMenu} className="text-white">
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      <div className={`h-full w-64 fixed top-0 left-0 bg-gray-800 text-white flex flex-col p-4 space-y-6 transition-transform transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {menuItems.map((name) => (
          <div key={name} className="w-full flex justify-between items-center py-2">
            <span>{name}</span>
            {editDeleteVisible[name] ? (
              <>
                <button onClick={() => onEdit(name)} className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button onClick={() => {
                  onDelete(name);
                  toggleEditDelete(name);
                }} className="text-red-500 hover:text-red-700 ml-1">
                  <FaTrash />
                </button>
              </>
            ) : (
              <button onClick={() => {
                onMenuClick(name);
                toggleEditDelete(name);
              }} className="text-green-500 hover:text-green-700 ml-2">
                <FaPlus />
              </button>
            )}
          </div>
        ))}
        <div className="mt-auto space-y-4">
          <button
            onClick={downloadResume}
            className="w-full flex justify-center items-center py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded text-lg text-white"
          >
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
