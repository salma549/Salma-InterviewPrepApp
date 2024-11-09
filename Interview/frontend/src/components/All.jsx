
import React, { useState } from 'react';
import axios from 'axios';
import { FaQuestionCircle } from 'react-icons/fa'; 
import { FaCode } from 'react-icons/fa'; 
import '../index.css'
import { Link } from 'react-router-dom';
import LoadingResume from '../pages/LoadingResume';

function All() {
    const [skills, setSkills] = useState('');
    const [questions, setQuestions] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateQuestions = async () => {
        const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

        if (skillsArray.length === 0) {
            alert('Please enter at least one skill.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/all/generate-all-questions', {
                skills: skillsArray
            });
            setQuestions(response.data.questions);
        } catch (err) {
            console.error('Error generating questions:', err);
            setError('An error occurred while generating questions.');
            setQuestions(null);
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

    return (
      <>
        <div className="relative bg-white min-h-screen flex flex-col items-center justify-start py-10  w-6xl">
            {/* Generate Questions Section */}

            <div className="relative w-full flex flex-col items-center p-8 bg-white rounded-lg shadow-2xl  overflow-hidden mt-20 transition-transform duration-500 hover:shadow-xl transform hover:-translate-y-2">
    {/* Decorative Background Element */}
    <div className="absolute inset-0 transform -rotate-6 bg-gradient-to-br from-blue-400 to-pink-500 opacity-30 rounded-lg"></div>
    
    {/* Title */}
    <h1 className="text-gray-900 text-4xl font-extrabold mb-4 z-10 text-center">
    Enter any topic and unlock tailored questions, answers, and personalized tips to help you ace your next interview with confidence!
    </h1>

    {/* Subtitle */}
    <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-semibold max-w-md z-10 text-center mb-6">
    You can ace any interview on any topic with the right mindset, preparation, and a willingness to learn.
    </p>

    {/* Call to Action Button */}
    <p className="px-10 py-4 text-gray-900 font-bold rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-100 hover:shadow-xl font-serif">
    Prepare confidently and master your interview with our tailored resources at your fingertips!
    </p>
</div>



{/* Generate Questions Section */}
<div className="relative z-10 w-full max-w-5xl bg-teal-500 shadow-2xl mt-20 rounded-lg p-8 mb-12 overflow-hidden after:-z-10 clip-path-custom">
    <h1 className="text-4xl font-extrabold text-white text-center font-['italic'] mb-6">Custom Questions at Your Fingertips</h1>

    <input
        type='text'
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Enter your desired topic..."
        className="w-full p-4 mb-4 border border-transparent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 bg-white"
    />

    <button 
        onClick={handleGenerateQuestions}
        className="w-full bg-blue-200 text-gray-800 py-4 rounded-lg shadow-md hover:bg-blue-300 focus:outline-none transition duration-300 ease-in-out"
    >
        {loading ? 'Generating...' : 'Generate Questions'}
    </button>

    {error && <div className="mt-4 text-red-300 text-center">{error}</div>}
</div>

<style jsx>{`
    .clip-path-custom {
        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%);
    }
`}</style>

{/* Generated Questions Section */}
 
<div className="w-full max-w-8xl bg-gray-50 shadow-lg rounded-lg p-4 md:p-6 lg:p-8">
    {loading ? (
        <p className="text-xl text-gray-700 text-center"><LoadingResume/></p>
    ) : (
        <div id="resultContainer" className="space-y-8">
            {questions ? (
                Object.entries(questions).map(([skill, pairs]) => (
                    <div key={skill} className="relative p-4 md:p-6 bg-white rounded-lg shadow-lg border-l-4 border-indigo-600 hover:border-indigo-800 transition duration-200">
                        {/* Section Header */}
                        <div className="flex items-center space-x-3 mb-4">
                            <FaCode className="text-indigo-600 text-2xl" />
                            <h2 className="text-lg md:text-2xl font-extrabold text-gray-800">{'💡 '}{skill} Questions</h2>
                        </div>

                        {/* Questions List */}
                        <div className="space-y-4 md:space-y-6">
                            {pairs.map((pair, index) => (
                                <div key={index} className="p-3 md:p-4 bg-gray-100 rounded-md shadow-md border-l-4 border-indigo-400 hover:border-indigo-600 hover:cursor-pointer hover:shadow-2xl transition duration-200">
                                    <div className="flex items-start space-x-3">
                                        <p className="text-sm md:text-lg font-serif text-gray-900">{formatText(pair.question)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="mt-4 text-gray-700 text-center">Your Questions, Answers and Tips are generated here...</p>
            )}
        </div>
    )}
</div>





            </div>

    
     {/* Call to Action Section */}
<section className="relative py-16 bg-gradient-to-r from-blue-900 to-indigo-500 text-white text-center">
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
    <Link to="/resume" className="bg-gradient-to-br from-purple-900 to-blue-400 hover:from-indigo-600 hover:to-green-800 text-white py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">
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

export default All;