import { useState } from "react";

const QuestionInput = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && link) {
      onAdd({ question, link });
      setQuestion("");
      setLink("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
        className="mr-2 p-2 rounded"
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
        className="mr-2 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add Question
      </button>
    </form>
  );
};

export default QuestionInput;
