import { useState, useEffect } from "react";
import Heading from "../components/HeadingComponent";
import MessageCard from "../components/MessageCard";
import api from "../axios";
import { useFirebase } from "../Firebase/firebaseContext";

const DiscussionForum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useFirebase();
  const [currentUserName, setCurrentUserName] = useState(""); // State for storing the user's name
  const [isPageVisible, setIsPageVisible] = useState(true); // Track if the page is visible

  useEffect(() => {
    const fetchUserName = async () => {
      if (user?.email) {
        try {
          const response = await api.get(`/api/v1/users/email/${user.email}`); // Fetch user by email
          setCurrentUserName(response.data.data.name); // Set the user's name
        } catch (error) {
          console.error("Error fetching user name:", error);
        }
      }
    };

    fetchUserName(); // Call the fetch function initially
  }, [user]); // Run this effect whenever the user changes

  // Handle visibility change (e.g., when switching tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPageVisible(false); // If the tab is hidden, stop polling
      } else {
        setIsPageVisible(true); // Resume polling if the tab is visible
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Fetch messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      console.log("Fetching messages..."); 
      try {
        const response = await api.get("/api/v1/messages/all-messages");
        setMessages(response.data.data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    // Fetch messages initially
    fetchMessages();

    // Polling interval (only when page is visible)
    const interval = setInterval(() => {
      if (isPageVisible) {
        fetchMessages(); // Poll for new messages only if page is active
      }
    }, 1000); // Poll every second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [isPageVisible]); // Re-run polling when page visibility changes

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const date = new Date();
      const formattedDate = date.toISOString();
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const messageData = {
        name: currentUserName || "You", // Use the current user's name
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
