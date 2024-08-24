import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">TranscriptPro</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">About</a>
            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Help</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
