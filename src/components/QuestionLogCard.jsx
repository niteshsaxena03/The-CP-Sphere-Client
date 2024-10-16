import { format } from "date-fns"; // Importing date-fns for formatting dates

const QuestionLogCard = ({ log, onDelete, userEmail }) => {
  // Convert the date from ISO format to a more readable format
  const formattedDate = format(new Date(log.dateSolved), "MMMM dd, yyyy");

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the log for: "${log.questionName}"?`
    );
    if (confirmed) {
      await onDelete(userEmail, log.questionName); // Call the delete function with userEmail and questionName
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-lg shadow-xl mb-6 flex flex-col sm:flex-row justify-between items-start transition-transform transform hover:scale-105">
      <div className="flex-1 mb-4 sm:mb-0">
        <h2 className="text-2xl font-bold drop-shadow-md">
          {log.questionName}
        </h2>
        <p className="text-amber-400 font-bold">{log.topic}</p>
        <p className="text-gray-300">{formattedDate}</p>{" "}
        {/* Use the formatted date here */}
        <p
          className="mt-2 max-h-32 overflow-y-auto break-words text-gray-200"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {log.learning}
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <a
          href={log.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 text-gray-800 py-2 px-5 rounded transition duration-300 shadow-md"
        >
          View Question
        </a>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded transition duration-300 shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default QuestionLogCard;
