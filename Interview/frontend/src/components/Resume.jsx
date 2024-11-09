


// Fully Responsive 


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingResume from '../pages/LoadingResume';
import { Link } from 'react-router-dom';

function Resume() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [skills, setSkills] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const onFileUpload = async () => {
        if (!selectedFile) {
            alert('Please upload a file');
            return;
        }

        const formData = new FormData();
        formData.append('resume', selectedFile);

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/resume/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSkills(response.data.skills.join(', '));
            setQuestions(response.data.questions);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading or parsing the file');
        } finally {
            setLoading(false);
        }
    };

    const formatText = (text) => {
        if (!text) return '';
        return text
            .replace(/\*\*/g, '')
            .replace(/#/g, '')
            .replace(/\n/g, '');
    };

    const getRandomColor = () => {
        const colors = [
            'bg-blue-100',
            'bg-green-100',
            'bg-yellow-100',
            'bg-red-100',
            'bg-purple-100',
            'bg-pink-100',
            'bg-indigo-100',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <>
        <div className="App min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-8 mt-20">
        <div className="hero-overlay flex flex-col items-center justify-center text-center p-4 md:p-8 min-h-screen relative bg-white">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gray-50 opacity-60 z-0"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 rounded-full bg-yellow-300 opacity-30 animate-pulse"></div>
      
          <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 z-10 transform transition-transform duration-300 hover:scale-105 shadow-lg">
            Your Success Journey Awaits!
          </h1>
      
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-xl z-10">
            Prepare, Practice, and Ace Your Interview with Confidence!
          </p>
        </div>
      
        <div className="max-w-5xl w-full  mx-auto p-6 md:p-8 bg-[#45b2b4] shadow-lg rounded-lg border border-gray-200 relative z-10 overflow-hidden mt-0">
          {/* Decorative Element */}

      
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6 transform transition-transform duration-300 hover:scale-105">
            Resume Skill Extractor
          </h1>
      
          <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center mb-4">
            Upload your PDF resume and extract your skills easily!
          </p>
      
          <input
            type="file"
            accept=".pdf"
            onChange={onFileChange}
            className="mb-5 p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#358d8a] transition-all w-full bg-gray-100 hover:bg-gray-200"
          />
      
          <button
            onClick={onFileUpload}
            className="w-full bg-[#48CFCB] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:bg-[#42b4b0] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Upload and Extract Skills
          </button>
        </div>
    
      
      

            {loading ? (
                <LoadingResume />
            ) : (
                <div className="mt-8 md:mt-10 w-full max-w-full md:max-w-7xl">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1679AB] mb-3 md:mb-4 text-center md:text-left">Extracted Skills:</h2>
                    <pre className="bg-white p-4 md:p-5 rounded-lg shadow-md text-gray-900 border border-indigo-300 font-mono text-sm md:text-base lg:text-lg leading-relaxed overflow-x-auto">
                        {skills || 'No skills extracted.'}
                    </pre>

                    {questions && Object.keys(questions).length > 0 ? (
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg mt-8 md:mt-10 transition-all duration-500">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-indigo-600 mb-4 md:mb-6 text-center md:text-left">Generated Interview Questions:</h2>
                            {Object.keys(questions).map((skill, index) => (
                                <div key={index} className={`mb-6 md:mb-10 p-4 md:p-6 rounded-lg shadow-md ${getRandomColor()}`}>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                                        <span className="mr-2">💡</span>{skill}
                                    </h3>
                                    <ul className="space-y-4 md:space-y-6">
                                        {questions[skill].map((qa, idx) => (
                                            <li
                                                key={idx}
                                                className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-400"
                                            >
                                                <p className="text-sm md:text-base lg:text-lg text-gray-900 font-medium mb-2">
                                                    {qa.question ? formatText(qa.question) : 'No question available'}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-lg text-center md:text-left">Your Questions, Answers and Tips are generated here...</p>
                    )}
                </div>

            )}


            
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
    <Link to="/resume" className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">
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


export default Resume;