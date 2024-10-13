import { useState, useEffect } from "react";
import Heading from "../components/HeadingComponent";
import QuestionLogInput from "../components/QuestionLogInput";
import QuestionLogCard from "../components/QuestionLogCard";
import { useFirebase } from "../Firebase/firebaseContext";
import api from "../axios";

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

  // Function to handle deleting a question log
  const deleteQuestionLog = async (email, questionName) => {
    try {
      await api.delete(`/api/v1/users/logs/${email}`, {
        data: { questionName },
      });
      // Update the state to remove the deleted log
      setQuestionsLog(
        questionsLog.filter((log) => log.questionName !== questionName)
      );
    } catch (error) {
      console.error("Error deleting question log:", error);
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
            <QuestionLogCard
              key={index}
              log={log}
              onDelete={deleteQuestionLog} // Pass the delete function
              userEmail={user.email} // Pass the user's email
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
