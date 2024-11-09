import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // For displaying error messages
  const [loading, setLoading] = useState(false); // Optional loading state

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    setLoading(true); // Show loading state

    // Basic validation for empty fields
    if (!formData.email || !formData.password) {
      setError('Please fill in both fields.');
      setLoading(false);
      return;
    }

    try {
      // Make the API request
      const { data } = await axios.post('http://localhost:5000/auth/signin', formData);
      console.log(data); // For debugging (you can remove this later)
      
      // Navigate to the home page on successful login
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.error('Login failed!', error);

      // Handle different types of errors here
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }

      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={formData.email} // Controlled input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              value={formData.password} // Controlled input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#3A98B9] hover:bg-[#3dbfef] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            No account?{' '}
            <Link to="/signup">
              <span className="font-bold text-[#3A98B9] hover:text-[#3dbfef]">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
