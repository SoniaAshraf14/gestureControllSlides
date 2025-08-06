import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-20 text-center px-6">
      <h2 className="text-4xl font-bold text-indigo-800 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
        For feedback or collaboration, feel free to reach out at <span className="font-medium text-indigo-600">example@email.com</span>
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg" />
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
