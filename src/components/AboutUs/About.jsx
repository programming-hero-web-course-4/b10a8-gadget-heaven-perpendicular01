import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-purple min-h-screen text-white">
      <Helmet>
        <title>About Us</title>
      </Helmet>

  
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">About Us</h1>
    
      </div>

    
      <div className="bg-white  text-black rounded-xl max-w-4xl mx-auto p-6 md:p-8 lg:p-10 -mt-12 shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-sm md:text-base leading-7 mb-6">
          Welcome to <strong>Gadget Heaven</strong>, your one-stop destination for the latest tech accessories! 
          Our mission is to bring cutting-edge technology and stylish gadgets to your fingertips. 
          From smartwatches to VR headsets, we aim to enhance your tech lifestyle with products that combine innovation and style.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-sm md:text-base leading-7 mb-6">
          To become a global leader in providing the best tech accessories that redefine user experiences. 
          We envision a world where technology effortlessly integrates into everyday life, making it more convenient, enjoyable, and stylish.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-sm md:text-base leading-7">
          <li>Innovation and Creativity</li>
          <li>Customer-Centric Approach</li>
          <li>Quality and Reliability</li>
          <li>Environmental Responsibility</li>
        </ul>
      </div>

    </div>
  );
};

export default About;
