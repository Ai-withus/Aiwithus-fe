import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger/close
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[90rem] mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="AI with us"
            className="w-[5rem] h-[5rem] object-cover rounded-full shadow-lg border-2 border-indigo-500"
          />
          <h1 className="text-2xl font-bold text-indigo-600">AI With Us</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
          <li><a href="#careers" className="hover:text-indigo-600">Careers</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-indigo-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
            <li><a href="#home" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#careers" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Careers</a></li>
            <li><a href="#contact" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
