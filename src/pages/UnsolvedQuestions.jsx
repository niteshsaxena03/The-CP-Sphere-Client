import { useState, useEffect } from "react";
import Heading from "../components/HeadingComponent";
import QuestionInput from "../components/QuestionInput"; // Adjust the path as necessary
import UnsolvedQuestionCard from "../components/UnsolvedQuestionCard"; // Adjust the path as necessary
import { useFirebase } from "../Firebase/firebaseContext";
import { useNavigate } from "react-router-dom";
import api from "../axios"; // Assuming this is your axios instance

const UnsolvedQuestions = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useFirebase();
  const [userEmail, setUserEmail] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (user) {
      //console.log(user);
      setUserEmail(user.email); // Set the email if user is logged in
    } else {
      console.log("user not found");
    }
  }, [user]);

  // Redirect to welcome page if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/"); // Change to your actual welcome page route
    }
  }, [isLoggedIn, navigate]);

  // Fetch unsolved questions when userEmail changes
  useEffect(() => {
    const fetchUnsolvedQuestions = async () => {
      if (userEmail) {
        try {
          const response = await api.get(
            `/api/v1/users/${userEmail}/unsolved-questions`
          );
          console.log("Fetched Questions Response:", response); // Log the entire response object
          console.log("Fetched Questions Data:", response.data); // Log the data from the response
          setQuestions(response.data.unsolvedQuestions);
        } catch (error) {
          console.error(
            "Error fetching unsolved questions:",
            error.response ? error.response.data : error.message
          );
        }
      }
    };

    fetchUnsolvedQuestions();
  }, [userEmail]);

  console.log("Current User Email:", userEmail);

  const addQuestion = async ({ question, link }) => {
    try {
      const response = await api.post(
        `/api/v1/users/${userEmail}/unsolved-questions`,
        { question, link }
      );
      setQuestions([...questions, response.data.newQuestion]); // Assuming the backend returns the new question
    } catch (error) {
      console.error("Error adding question:", error);
    }
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
