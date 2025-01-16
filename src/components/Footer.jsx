import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
        <p className="mt-4">© 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;