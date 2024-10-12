import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="border-4 border-gradient-to-r from-red-600 via-red-700 to-pink-800 rounded-lg p-6 shadow-lg bg-gray-100 my-6  md:mx-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-pink-500 text-center">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
