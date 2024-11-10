import React, { useState, useEffect } from 'react';

const LoadingResume = () => {
    const [currentText, setCurrentText] = useState('');
    
    const textArray = [
        'Did you know? 50% of people think the hardest interview question is "Tell me about yourself," and the other 50% panic when they hear, "Do you have any questions for us?"',
        'Where do you see yourself in 5 years? Me: Celebrating the 5th anniversary of you asking me this question.',
        'In every interview, you get a chance to write the opening line of your next great chapter.',
        'In every interview, you have a choice: let fear hold you back or let confidence drive you forward.',
        'Your resume tells them where you have been; your attitude tells them where you are going.',
        'Don’t watch the clock; do what it does. Keep going.',
        'Your only limit is the amount of doubt you hold in your mind.',
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(textArray[index]);
            setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            setTimeout(() => setCurrentText(''), 6000);
        }, 7000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-4 w-full">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-extrabold text-gray-900 text-center mb-2 sm:mb-4 tracking-wide">
                    {currentText}
                </h1>
                <button className="relative w-full py-3 sm:py-4 md:py-5  md:px-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 bg-gray-300 rounded-full shadow-inner transition-transform transform hover:translate-y-1 hover:bg-gradient-to-r from-pink-500 to-yellow-500 hover:text-white duration-300">
                    Loading interview-focused questions designed for your unique journey...
                </button>
                {/* Responsive background effects */}
                <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-blue-500/30 rounded-full blur-3xl -top-6 sm:-top-8 md:-top-12 lg:-top-16 -left-6 sm:-left-8 md:-left-12 lg:-left-16 animate-pulse"></div>
                <div className="absolute inset-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-pink-500/30 rounded-full blur-3xl -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-16 -right-6 sm:-right-8 md:-right-12 lg:-right-16 animate-ping"></div>
                {/* Additional Background Effects */}
                <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-r from-blue-200 to-pink-200 opacity-50"></div>
            </div>
        </div>
    );
};

export default LoadingResume;