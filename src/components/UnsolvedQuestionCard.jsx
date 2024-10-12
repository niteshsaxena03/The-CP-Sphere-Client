
const UnsolvedQuestionCard = ({ question, href, onDelete }) => {
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
        >
          View Question
        </a>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UnsolvedQuestionCard;
