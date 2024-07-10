import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
      src="/images/logo192.png"
      className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
      alt="Image description"
    />
          <span className="ml-3 text-xl">Ecommerce</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/contact-us" className="mr-5 hover:text-gray-900">Contact Us</Link>
          <Link to="/about-us" className="mr-5 hover:text-gray-900">About Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
