import { useState, useEffect } from "react"; // Import useState and useEffect
import Heading from "../components/HeadingComponent";
import MessageCard from "../components/MessageCard"; // Import the MessageCard component
import api from "../axios"; // Import your axios instance

const DiscussionForum = () => {
  const [messages, setMessages] = useState([]); // Initialize messages state as an empty array
  const [newMessage, setNewMessage] = useState(""); // State for new message input

  // Fetch messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/api/v1/messages/all-messages"); // Adjust the endpoint as necessary
        setMessages(response.data.data || []); // Update state with fetched messages
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const date = new Date();
      const formattedDate = date.toISOString(); // Ensure date is in ISO format
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const messageData = {
        name: "You", // Replace with the actual name
        message: newMessage,
        date: formattedDate, // Optional, ensure ISO format
        time: formattedTime,
      };

      try {
        const response = await api.post(
          "/api/v1/messages/new-message",
          messageData
        );
        // Handle success
        console.log("Message sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending message:", error.response.data);
      }

      setNewMessage(""); // Clear input after sending
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
