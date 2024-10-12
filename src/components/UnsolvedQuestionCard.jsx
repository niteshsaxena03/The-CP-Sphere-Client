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
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex justify-between items-center mb-4">
      <div>
        <h2 className="text-xl font-bold">{question}</h2>
      </div>
      <div className="flex space-x-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          aria-label={`View question: ${question}`} // Accessibility improvement
        >
          View Question
        </a>
        <button
          onClick={handleDelete} // Use handleDelete for confirmation
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          aria-label={`Delete question: ${question}`} // Accessibility improvement
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UnsolvedQuestionCard;
