import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-800 to-purple-300 h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="African business people"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empowering Africa's Future
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          SOAR Africa is dedicated to fostering entrepreneurship, innovation, and growth
          across the continent through education, networking, and resource sharing.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#programs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-400 bg-white hover:bg-gray-50"
          >
            Explore Programs
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-purple-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;