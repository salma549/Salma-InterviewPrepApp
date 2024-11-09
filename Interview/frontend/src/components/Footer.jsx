import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About InterviewPrep</h3>
          <p className="text-gray-400">
            We provide personalized interview questions, answers, and tips to help you succeed in any interview.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: support@interviewprep.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Location: Hyderabad, India</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#3A98B9] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#3A98B9] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#3A98B9] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#3A98B9] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 pt-4 mt-6">
        <p className="text-gray-400">&copy; 2024 InterviewPrep. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
