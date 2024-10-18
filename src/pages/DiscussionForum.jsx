import { useState } from "react"; // Import useState to manage state
import Heading from "../components/HeadingComponent";
import MessageCard from "../components/MessageCard"; // Import the MessageCard component

const DiscussionForum = () => {
  const [messages, setMessages] = useState([
    {
      name: "Alice",
      message: "Hello everyone! Excited to discuss here.",
      date: "2024-10-18",
      time: "10:00 AM",
    },
    {
      name: "Bob",
      message: "Hi Alice! Welcome to the discussion.",
      date: "2024-10-18",
      time: "10:05 AM",
    },
    {
      name: "Charlie",
      message: "What topics are we discussing today?",
      date: "2024-10-18",
      time: "10:10 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState(""); // State for new message input

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const date = new Date();
      const formattedDate = `${date.getDate()} ${date.toLocaleString(
        "default",
        {
          month: "long",
        }
      )} ${date.getFullYear()}`;
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          name: "You",
          message: newMessage,
          date: formattedDate,
          time: formattedTime,
        },
      ]);
      setNewMessage(""); // Clear the input field
    }
  };

  // Function to handle key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(); // Call the send message function
    }
  };

  return (
    <div className="bg-black min-h-screen p-5">
      <div className="flex flex-col items-center">
        <Heading title="Discussion Forum" />
        <div className="w-full mt-5 space-y-4">
          {messages.map((msg, index) => (
            <MessageCard
              key={index}
              name={msg.name}
              message={msg.message}
              date={msg.date}
              time={msg.time}
              isRightAligned={index % 2 === 1} // Right align for odd indexed messages
            />
          ))}
        </div>
        {/* Input field for new message */}
        <div className="w-full mt-5">
          <div className="flex">
            <input
              type="text"
              className="flex-grow p-3 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress} // Handle Enter key press
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-700 hover:bg-blue-800 text-white p-3 ml-2 rounded-r-lg transition duration-200 w-32" // Increased width
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
