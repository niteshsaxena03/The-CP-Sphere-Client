import { useState, useEffect } from "react";
import Heading from "../components/HeadingComponent";
import QuestionLogInput from "../components/QuestionLogInput"; // New input component
import QuestionLogCard from "../components/QuestionLogCard"; // New card component
import { useFirebase } from "../Firebase/firebaseContext"; // Import your Firebase context
import api from "../axios"; // Assuming you have an axios instance set up

const QuestionLogPage = () => {
  const { user } = useFirebase(); // Get the current user from Firebase context
  const [questionsLog, setQuestionsLog] = useState([]); // State to store logged questions

  useEffect(() => {
    const fetchQuestionLogs = async () => {
      if (user) {
        try {
          const response = await api.get(`/api/v1/users/logs/${user.email}`); // Fetch logs by user email
          setQuestionsLog(response.data); // Set the fetched question logs
        } catch (error) {
          console.error("Error fetching question logs:", error);
        }
      }
    };

    fetchQuestionLogs();
  }, [user]);

  // Function to handle adding a question log
  const addQuestionLog = async ({
    questionName,
    link,
    dateSolved,
    topic,
    learning,
  }) => {
    const newLog = { questionName, link, dateSolved, topic, learning };

    try {
      // Send a POST request to add the new question log
      await api.post("/api/v1/users/logs", {
        email: user.email, // Send the user's email
        ...newLog, // Include the new log data
      });

      setQuestionsLog([...questionsLog, newLog]); // Update state with the new log
    } catch (error) {
      console.error("Error adding question log:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black p-5">
      <Heading title="Daily Questions Log" />
      <QuestionLogInput onAdd={addQuestionLog} />

      {/* Display logged questions */}
      <div className="mt-8">
        {questionsLog.length > 0 ? (
          questionsLog.map((log, index) => (
            <QuestionLogCard key={index} log={log} />
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
