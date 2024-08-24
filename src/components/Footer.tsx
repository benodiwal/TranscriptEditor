import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 TranscriptPro. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
