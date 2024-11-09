



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/auth/signup", formData);
      console.log(data);
      navigate('/'); // Redirect to home page on successful signup
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">First Name</label>
            <input onChange={handleChange} type="text" id="firstName" name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input onChange={handleChange} type="text" id="lastName" name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input onChange={handleChange} type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Mobile</label>
            <input onChange={handleChange} type="number" id="mobile" name="mobile" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input onChange={handleChange} type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-[#3A98B9] hover:bg-[#3dbfef] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already a User?
              <Link to={'/signin'}>
                <span className="font-bold text-[#3A98B9] hover:text-[#3dbfef]">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


