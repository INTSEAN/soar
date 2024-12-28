import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Soar Business Mixer',
    description: 'Connect with investors and secure funding for your venture',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/deal-room'
  },
  {
    title: 'Soar Events Institute',
    description: 'World-class training for event management professionals',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/events'
  },
  {
    title: 'Soar Arts Institute',
    description: 'Nurturing creative talent across Africa',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/arts'
  },
  {
    title: 'Soar Digital',
    description: 'Digital transformation solutions for modern businesses',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/digital'
  },
  {
    title: 'Soar Shops',
    description: 'Supporting local artisans and entrepreneurs',
    image: 'https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
    link: '/shops'
  },
  {
    title: 'Soar CSR',
    description: 'Corporate social responsibility initiatives',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvcnBvcmF0ZSUyMHNvY2lhbCUyMHJlc3BvbnNpYmlsdHl8ZW58MHx8MHx8fDA%3D',
    link: '/csr'
  },
  {
    title: 'Soar Books & Resources',
    description: 'Access to educational resources and tools',
    image: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D',
    link: '/resources'
  }
];

const Programs: React.FC = () => {
  return (
    <div id="programs" className="bg-white py-24 sm:py-32 animate-fade-in animate-delay-1000 animate-duration-1000 animate-ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive solutions designed to elevate African entrepreneurship
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div key={program.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={program.image} alt={program.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{program.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    to={program.link}
                    className="text-base font-semibold text-purple-600 hover:text-purple-500 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;