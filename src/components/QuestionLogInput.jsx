import { useState } from "react";

const QuestionLogInput = ({ onAdd }) => {
  const [questionName, setQuestionName] = useState("");
  const [link, setLink] = useState("");
  const [dateSolved, setDateSolved] = useState("");
  const [topic, setTopic] = useState("");
  const [learning, setLearning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ questionName, link, dateSolved, topic, learning });

    // Clear inputs after submission
    setQuestionName("");
    setLink("");
    setDateSolved("");
    setTopic("");
    setLearning("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-2xl max-w-xl mx-auto"
    >
      <div>
        <label className="block text-cyan-400 font-semibold mb-2">
          Name of Question
        </label>
        <input
          type="text"
          value={questionName}
          onChange={(e) => setQuestionName(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500 text-white"
          placeholder="Enter question name"
          required
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2">
          Link of Question
        </label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500 text-white"
          placeholder="Enter question link"
          required
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2">
          Date Solved
        </label>
        <input
          type="date"
          value={dateSolved}
          onChange={(e) => setDateSolved(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2">
          Topic of Question
        </label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500 text-white"
          placeholder="Enter topic"
          required
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2">
          What did you learn?
        </label>
        <textarea
          value={learning}
          onChange={(e) => setLearning(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500 text-white"
          placeholder="Enter what you learned"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-cyan-500 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Question Log
      </button>
    </form>
  );
};

export default QuestionLogInput;
