


import React, { useState } from 'react';
import axios from 'axios';
import { FaCode } from 'react-icons/fa'; // Importing a code icon for design
import '../index.css'
import { Link } from 'react-router-dom';
import LoadingResume from '../pages/LoadingResume';

function Code() {
    const [skills, setSkills] = useState('');
    const [generatedCode, setGeneratedCode] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateCode = async () => {
        const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

        if (skillsArray.length === 0) {
            alert('Please enter at least one skill.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/code/generate-code', {
                skills: skillsArray
            });
            setGeneratedCode(response.data.generatedCode);
        } catch (err) {
            console.error('Error generating code:', err);
            setError('An error occurred while generating code.');
            setGeneratedCode(null);
        } finally {
            setLoading(false);
        }
    };

    return (

      <>
       <div className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 min-h-screen flex flex-col items-center justify-start py-10">
  {/* Input and Button Section */}
  <div className="relative w-full max-w-3xl flex flex-col items-center p-10 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg mt-20 clip-path-custom">

    {/* Blob Top Left */}
    <div className="absolute top-0 left-0 -z-10">
      <svg className="h-64 w-64 text-gray-400 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M37.5,-56.7C50.3,-51.2,59.8,-41,66.5,-28.7C73.2,-16.4,77.1,-2.1,74.5,11.7C71.9,25.4,62.8,38.7,51.1,47.2C39.5,55.7,25.3,59.4,9.4,61.2C-6.4,63.1,-23.2,63,-32.4,54.7C-41.7,46.3,-43.4,29.8,-50.5,14.9C-57.6,0,-70.1,-13.3,-70.9,-26.1C-71.7,-39,-60.9,-51.4,-47.5,-56.4C-34.1,-61.3,-17.1,-58.7,-0.1,-58.6C17,-58.5,34,-61.2,37.5,-56.7Z" transform="translate(100 100)" />
      </svg>
    </div>

    {/* Content Section */}
    <div className="relative z-10 w-full text-center">
      <h1 className="text-gray-900 text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
        Accelerate Your Coding Journey
      </h1>
      <p className="text-gray-600 text-lg sm:text-xl font-medium mb-8">
        Ready to take your skills to the next level? Choose your language, enter your code, and let the magic begin!
      </p>
      <button className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
        Start Now
      </button>
    </div>

    {/* Blob Bottom Right */}
    <div className="absolute bottom-0 right-0 -z-10">
      <svg className="h-64 w-64 text-gray-400 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M48.6,-45.5C61.4,-31.6,68.8,-15.8,68.8,-0.5C68.9,14.8,61.6,29.6,49.9,43.8C38.1,58.1,22,71.9,3.2,72.8C-15.7,73.8,-31.4,61.9,-46,48.2C-60.6,34.5,-74.1,18.9,-74.1,2.9C-74,-13,-60.4,-25.9,-47,-39.1C-33.7,-52.3,-20.7,-65.8,-6.5,-66.2C7.7,-66.7,15.5,-54.1,48.6,-45.5Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>




            
            {/* text area section */}

            
            <div className='mt-10'>
                <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Enter programming language and the code you need ...)"
                    className="w-full p-4 mb-4 border border-transparent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                />
                <button 
                    onClick={handleGenerateCode}
                    className="w-full bg-gradient-to-r from-teal-300 to-blue-400 text-white py-4 rounded-lg shadow-md hover:bg-gradient-to-r from-teal-500 to-blue-600 focus:outline-none transition duration-300 ease-in-out"
                >
                    {loading ? 'Generating...' : 'Generate Code'}
                </button>

                {error && <div className="mt-4 text-red-300 text-center">{error}</div>}
            </div>

           {/* Generated Code Section */}
<div className="w-full max-w-8xl bg-gray-50 shadow-lg rounded-lg p-4 md:p-6 lg:p-8 mt-8 font-serif">
    {loading ? (
        <p className="text-xl text-gray-700 text-center font-serif"><LoadingResume/></p>
    ) : (
        <div id="resultContainer" className="space-y-8 font-serif">
            {generatedCode ? (
                Object.entries(generatedCode).map(([skill, code], index) => (
                    <div 
                        key={index} 
                        className="relative p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-lg border-l-4 border-indigo-600 hover:border-indigo-800 transition duration-200 font-serif"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3 mb-4">
                            <FaCode className="text-indigo-600 text-2xl font-serif" />
                            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 font-serif">
                                {'💻 '}{skill} Code
                            </h2>
                        </div>
                        <pre className="bg-gray-100 p-4 font-serif rounded-lg shadow-inner text-sm sm:text-base md:text-lg text-gray-900 whitespace-pre-wrap overflow-x-auto">
                            {code.replace(/\*\*/g, '')}
                        </pre>
                    </div>
                ))
            ) : (
                <p className="mt-4 text-gray-700 text-center font-serif">Your Code will be Generated here...</p>
            )}
        </div>
    )}
</div>


        </div>

        
     {/* Call to Action Section */}
     <section className="relative py-16 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
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
  
}

export default Code;