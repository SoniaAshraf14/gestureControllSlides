import React from "react";
import { Lightbulb, MoveRight, Video } from "lucide-react";

const steps = [
  {
    icon: <Video size={40} />,
    title: "Start Webcam",
    desc: "Allow the app to access your webcam and detect your body pose live.",
  },
  {
    icon: <MoveRight size={40} />,
    title: "Make a Gesture",
    desc: "Move your hand left or right to go to the previous or next slide.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Hands-Free Presenting",
    desc: "Enjoy a smooth and interactive slide deck experience without touching anything!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800 mb-2">How It Works</h2>
        <p className="text-gray-600">Only 3 easy steps to gesture-controlled presentation.</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="text-indigo-700 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
