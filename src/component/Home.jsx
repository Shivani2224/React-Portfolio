import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-teal-100"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm{" "}
        <span className="text-[oklch(70.4%_0.14_182.503)]">Shivani</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-700">
        A passionate Front-End Developer building responsive web apps using
        React, JavaScript, HTML, and CSS.
      </p>
   
    </section>
  );
};

export default Home;
