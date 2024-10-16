

const ResourceCard = ({ topic, resources }) => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white rounded-lg p-6 md:mx-20 border border-blue-600 flex mb-8 flex-col sm:flex-row justify-between items-center shadow-lg transition-transform transform hover:scale-105">
      {/* Topic Name */}
      <h3 className="text-2xl sm:text-4xl font-serif sm:w-1/2 text-center sm:text-left mb-4 sm:mb-0 text-white drop-shadow-lg">
        {topic}
      </h3>

      {/* Resources */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end sm:w-1/2 space-y-2 sm:space-y-0 sm:space-x-4">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.href}
            className="bg-white hover:bg-gray-200 text-blue-600 py-3 px-5 rounded-lg shadow-md text-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
