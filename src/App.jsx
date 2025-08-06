import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GestureController from "./components/GestureController";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";

const App = () => {
  const slides = [
    {
      title: "Introduction",
      content: "Welcome to the future of hands-free presentations!",
    },
    {
      title: "How It Works",
      content:
        "Use your hand gestures to navigate through slides easily and smoothly.",
    },
    {
      title: "Applications",
      content:
        "Perfect for classrooms, conferences, and assistive tech use cases.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] min-h-screen overflow-x-hidden">
      <Header />
      <main className="space-y-24">
        <HeroSection />
        <GestureController slides={slides} />
        <HowItWorks />
        <AboutUs />
        <ContactUs />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
