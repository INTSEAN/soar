import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-50 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-slate-950 hover:bg-gray-950 shadow-xs fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="../components/logo.jpeg" alt="Custom Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-50 to-gray-300 bg-clip-text text-transparent">
                SOAR Africa
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/deal-room">Soar Deal Room</NavLink>
            <NavLink to="/events">Soar Events Institute</NavLink>
            <NavLink to="/arts">Soar Arts Institute</NavLink>
            <NavLink to="/digital">Soar Digital</NavLink>
            <NavLink to="/shops">Soar Shops</NavLink>
            <NavLink to="/csr">Soar CSR</NavLink>
            <NavLink to="/resources">Soar Books & Resources</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>

          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="text-gray-50 hover:text-purple-600 focus:outline-none">
              <svg className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/deal-room">Soar Deal Room</NavLink>
          <NavLink to="/events">Soar Events Institute</NavLink>
          <NavLink to="/arts">Soar Arts Institute</NavLink>
          <NavLink to="/digital">Soar Digital</NavLink>
          <NavLink to="/shops">Soar Shops</NavLink>
          <NavLink to="/csr">Soar CSR</NavLink>
          <NavLink to="/resources">Soar Books & Resources</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;