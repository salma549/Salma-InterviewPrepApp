
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CodeEditor = () => {
  const [languageId, setLanguageId] = useState(54); // Default language: C++
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    { id: 63, name: 'JavaScript' },
    { id: 54, name: 'C++' },
    { id: 62, name: 'Java' },
    { id: 71, name: 'Python' },
  
    { id: 51, name: 'C' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/editor/submit', {
        code,
        languageId: parseInt(languageId),
      });

      setOutput(response.data.output || response.data.error);
    } catch (error) {
      console.error('Error submitting the code:', error);
      setOutput('An error occurred while submitting the code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="w-full max-w-7xl mx-auto mt-24 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 mt-7">Code Editor</h1>

      <div className="bg-gray-800 border border-gray-700 rounded-lg">
        <div className="p-4 bg-gray-700 text-sm text-gray-300 flex flex-col sm:flex-row items-center justify-between rounded-t-lg">
          <span className="font-mono mb-2 sm:mb-0">Select Language:</span>
          <select
            value={languageId}
            onChange={(e) => setLanguageId(parseInt(e.target.value))}
            className="bg-gray-900 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="15"
          className="w-full p-4 bg-gray-900 text-green-400 border-t border-gray-700 rounded-b-lg focus:outline-none font-mono resize-none"
          placeholder="// Write your code here..."
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>

      <div className="mt-8 bg-black p-4 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold mb-4">Terminal Output:</h2>
        {isLoading ? (
          <p className="text-lg text-yellow-500">Processing...</p>
        ) : (
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto h-48 max-h-72">
            {output ? `> ${output}` : '> No output yet'}
          </pre>
        )}
      </div>
    </div>


    
     {/* Call to Action Section */}
     <section className="relative py-16 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center mt-5">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="fill-current text-indigo-500">
      <path d="M0 0L1200 0V36C1054.64 83.36 904.63 110.1 748.21 110.1C476.39 110.1 236.12 16.72 0 0Z" />
    </svg>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl font-extrabold mb-4">Get Started Today</h2>
    <p className="text-xl font-light mb-8">
      Whether it's a new job or a promotion, we’re here to help you succeed. Start preparing with personalized questions now.
    </p>
    <Link to="/resume" className="bg-gradient-to-br from-purple-900 to-blue-700 hover:from-indigo-600 hover:to-green-800 text-white py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">
      Upload Your Resume
    </Link>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="fill-current text-indigo-500">
      <path d="M0 0L1200 0V36C1054.64 83.36 904.63 110.1 748.21 110.1C476.39 110.1 236.12 16.72 0 0Z" />
    </svg>
  </div>
</section>

      
    </>
  );
};

export default CodeEditor;