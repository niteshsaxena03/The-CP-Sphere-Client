import React from "react";

const ResourceCard = ({ topic, resources }) => {
  return (
    <div className="bg-gray-900  text-white rounded-lg p-8 md:mx-20 border border-blue-400 flex mb-8 flex-col sm:flex-row justify-between items-center shadow-lg">
      {/* Topic Name */}
      <h3 className="text-3xl sm:text-5xl font-serif sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0 text-blue-300">
        {topic}
      </h3>

      {/* Resources */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end sm:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.href}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md text-xl font-semibold text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {resource.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;
