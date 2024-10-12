import { useState } from "react";
import Heading from "../components/HeadingComponent";
import QuestionInput from "../components/QuestionInput"; // Adjust the path as necessary
import UnsolvedQuestionCard from "../components/UnsolvedQuestionCard"; // Adjust the path as necessary

const UnsolvedQuestions = () => {
  const [questions, setQuestions] = useState([
    { question: "Example Question 1", link: "https://example.com/question1" },
    { question: "Example Question 2", link: "https://example.com/question2" },
  ]);

  const addQuestion = ({ question, link }) => {
    setQuestions([...questions, { question, link }]);
  };

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  // Function to handle random selection
  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    window.open(randomQuestion.link, "_blank"); // Open the random question in a new tab
  };

  return (
    <div className="min-h-screen bg-black p-5">
      <Heading title="Unsolved Questions" />
      <QuestionInput onAdd={addQuestion} />
      <div className="flex justify-center mb-8">
        <button
          onClick={handleRandomSelect}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl md:text-2xl font-bold hover:bg-blue-700 transition duration-200"
        >
          Random Question
        </button>
      </div>

      {questions.length > 0 ? (
        questions.map((item, index) => (
          <UnsolvedQuestionCard
            key={index}
            question={item.question}
            href={item.link}
            onDelete={() => deleteQuestion(index)}
          />
        ))
      ) : (
        <p className="text-white font-bold text-2xl text-center">
          No unsolved questions available.
        </p>
      )}
    </div>
  );
};

export default UnsolvedQuestions;
