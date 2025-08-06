import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 text-center">
      <h2 className="text-5xl font-extrabold text-indigo-800 mb-4 animate-fadeIn">Control Slides with Gestures</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">A futuristic way to present — wave your hands to switch slides!</p>
      <a href="#gesture" className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-indigo-800 transition">Try It Now</a>
    </section>
  );
};

export default HeroSection;
