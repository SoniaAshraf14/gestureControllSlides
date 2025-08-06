import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">GestureSlide</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#hero" className="hover:text-indigo-200 transition">Home</a>
          <a href="#how" className="hover:text-indigo-200 transition">How It Works</a>
          <a href="#about" className="hover:text-indigo-200 transition">About</a>
          <a href="#contact" className="hover:text-indigo-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
