import { useState } from "react";
import Heading from "../components/HeadingComponent";
import QuestionLogInput from "../components/QuestionLogInput"; // New input component
import QuestionLogCard from "../components/QuestionLogCard"; // New card component
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

  // Function to handle deleting a log
  const handleDeleteLog = (index) => {
    const updatedLogs = questionsLog.filter((_, i) => i !== index);
    setQuestionsLog(updatedLogs); // Update state with the remaining logs
  };

  return (
    <div className="min-h-screen bg-black p-5">
      <Heading title="Daily Questions Log" />
      <QuestionLogInput onAdd={addQuestionLog} />

      {/* Display logged questions */}
      <div className="mt-8">
        {questionsLog.length > 0 ? (
          questionsLog.map((log, index) => (
            <QuestionLogCard
              key={index}
              log={log}
              onDelete={() => handleDeleteLog(index)} // Pass the delete function
            />
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
