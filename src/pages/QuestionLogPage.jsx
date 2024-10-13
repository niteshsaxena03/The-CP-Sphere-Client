import { useState } from "react";
import Heading from "../components/HeadingComponent";
import QuestionLogInput from "../components/QuestionLogInput"; // New input component
import { useNavigate } from "react-router-dom";

const QuestionLogPage = () => {
  const navigate = useNavigate();
  const [questionsLog, setQuestionsLog] = useState([]); // State to store logged questions

  // Dummy function to handle adding a question log
  const addQuestionLog = ({
    questionName,
    link,
    dateSolved,
    topic,
    learning,
  }) => {
    const newLog = { questionName, link, dateSolved, topic, learning };
    setQuestionsLog([...questionsLog, newLog]); // Update state with the new log
  };

  return (
    <div className="min-h-screen bg-black p-5">
      <Heading title="Question Log" />
      <QuestionLogInput onAdd={addQuestionLog} />

      {/* Display logged questions */}
      <div className="mt-8">
        {questionsLog.length > 0 ? (
          questionsLog.map((log, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-5 rounded-lg shadow-lg mb-4"
            >
              <h2 className="text-xl font-bold">Name: {log.questionName}</h2>
              <p>
                Link:{" "}
                <a
                  href={log.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {log.link}
                </a>
              </p>
              <p>Date Solved: {log.dateSolved}</p>
              <p>Topic: {log.topic}</p>
              <p>Learning: {log.learning}</p>
            </div>
          ))
        ) : (
          <p className="text-white font-bold text-2xl text-center">
            No logs available yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestionLogPage;
