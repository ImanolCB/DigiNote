import { useState } from 'react';
import Button from '../Button/Button';
import "./../../assets/navBar.css";

const logo = './../../../public/logo.svg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-400/60 backdrop-blur-md shadow-sky-200 shadow-md fixed w-full min-w-72 top-0 left-0 z-10">
      <div className=" mx-auto px-4 py-2 flex justify-between items-center relative">
        {/* Left Side - Logo and About */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Company Logo" className="h-12 w-12 md:h-20 md:w-20" />
          <span className="text-white text-lg font-bold">DigiNote</span>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-white hover:text-gray-600">About</a>
          </div>
        </div>
        {/* Right Side - Mi cuenta */}
        <div className="hidden md:flex">
          <Button type="button" content="Mi cuenta" state={isOpen} onClick={toggleMenu} />
        </div>
        {/* Mobile Menu Button displayer */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="menu-content absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-md overflow-hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block text-gray-800 hover:text-sky-400 hover:bg-sky-400/10 py-4 px-2 rounded-md">About</a>
              <Button type="button" content="Mi cuenta" state={isOpen} onClick={toggleMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
