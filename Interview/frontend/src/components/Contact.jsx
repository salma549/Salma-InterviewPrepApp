import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>


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

    </div>
  )
}

export default Contact