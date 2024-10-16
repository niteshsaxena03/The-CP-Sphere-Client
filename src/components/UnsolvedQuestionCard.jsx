const UnsolvedQuestionCard = ({ question, href, onDelete }) => {
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the question: "${question}"?`
    );
    if (confirmed) {
      onDelete(); // Call the onDelete function if confirmed
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-800 to-blue-800 text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center mb-4 transition-transform transform hover:scale-105">
      <div className="mb-2 md:mb-0">
        <h2 className="text-xl md:text-2xl font-bold drop-shadow-lg">
          {question}
        </h2>
      </div>
      <div className="flex space-x-2 md:space-x-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 text-green-800 px-4 py-2 rounded text-base shadow-md transition-all duration-300 transform hover:scale-105"
          aria-label={`View question: ${question}`}
        >
          View Question
        </a>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-base shadow-md transition-all duration-300 transform hover:scale-105"
          aria-label={`Delete question: ${question}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UnsolvedQuestionCard;
