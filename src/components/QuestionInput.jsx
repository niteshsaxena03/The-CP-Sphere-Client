import { useState } from "react";

const QuestionInput = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [link, setLink] = useState("");

  const handleAdd = () => {
    if (question && link) {
      onAdd({ question, link });
      setQuestion("");
      setLink("");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold text-white mb-4">
        Add Unsolved Question
      </h2>
      <input
        type="text"
        placeholder="Question Name"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="bg-gray-700 text-white p-2 rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Question Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Question
      </button>
    </div>
  );
};

export default QuestionInput;
