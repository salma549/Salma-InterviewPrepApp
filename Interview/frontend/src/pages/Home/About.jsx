

import React from 'react';
import image from '../../assets/images/sample interview.png';

const About = () => {
  return (
    <>
      <div className='bg-[#E6E6FA]  flex flex-col justify-center items-center pr-5 md:pr-20'>
        <div className='flex flex-col items-start px-4 md:px-20 lg:px-80'>
          <h1 className='font-serif text-3xl md:text-4xl lg:text-5xl pt-10'>About Interview Prep</h1>
          <p className='pb-10  md:text-xl lg:text-xl pt-4 text-start font-serif'>
            Welcome to Interview Prep, the ultimate platform for personalized interview question generation. Our cutting-edge technology analyzes uploaded resumes to create tailored interview questions, empowering students and job seekers with the confidence to excel in their interviews.
          </p>
        </div>

        {/* Flex container for two columns */}
        <div className='flex flex-col md:flex-row justify-between items-start md:mt-10 '>
          <div className='w-full md:w-3/4 flex justify-center md:mb-10'>
            <img src={image} alt="Interview Preparation" className='w-full h-auto max-w-md' />
          </div>

          <div className='flex flex-col items-start md:items-start  w-full md:w-2/4 '>
            <p className=' md:text-xl lg:text-xl text-start font-serif'>
              At Interview Prep, we are dedicated to providing a clean and user-friendly interface that prioritizes user experience and visual appeal. Our focus on innovation and customization ensures that each user receives a unique and effective interview preparation experience. Ready to boost your interview performance? Join Interview Prep today!
            </p>
            <button className='border border-blue-950 bg-blue-950 text-white py-2 px-5 mt-4'>
              Discover More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
