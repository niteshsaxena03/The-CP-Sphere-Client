import { useState } from "react";
import Heading from "../components/HeadingComponent";
import UnsolvedQuestionCard from "../components/UnsolvedQuestionCard"; // Assuming your card component is here

const UnsolvedQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Binary Search Optimization",
      href: "https://example.com/binary-search",
    },
    {
      id: 2,
      question: "Dynamic Programming: Knapsack Problem",
      href: "https://example.com/knapsack-problem",
    },
    {
      id: 3,
      question: "Graph Algorithms: Shortest Path",
      href: "https://example.com/shortest-path",
    },
  ]);

  // Function to handle random selection
  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    window.open(randomQuestion.href, "_blank"); // Open the random question in a new tab
  };

  return (
    <div className="min-h-screen bg-black p-5">
      <Heading title="Unsolved Questions" />
      <div className="flex justify-center mb-8">
        <button
          onClick={handleRandomSelect}
          className="bg-blue-600 text-white py-4 px-8 rounded-lg text-2xl font-bold hover:bg-blue-700"
        >
          Random Question
        </button>
      </div>
      <div className="space-y-4">
        {questions.map((question) => (
          <UnsolvedQuestionCard
            key={question.id}
            question={question.question}
            href={question.href}
            onDelete={() =>
              setQuestions(questions.filter((q) => q.id !== question.id))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default UnsolvedQuestions;