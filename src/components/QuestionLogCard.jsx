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
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg mb-4 flex justify-between items-start">
      <div className="flex-1">
        <h2 className="text-xl font-bold">{log.questionName}</h2>
        <p className="text-blue-400 font-semibold">{log.topic}</p>
        <p className="text-gray-300">{formattedDate}</p>{" "}
        {/* Use the formatted date here */}
        <p
          className="mt-2 max-h-32 overflow-y-auto break-words"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {log.learning}
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <a
          href={log.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          View Question
        </a>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default QuestionLogCard;
