import Heading from "../components/HeadingComponent";
import MessageCard from "../components/MessageCard"; // Import the MessageCard component

const DiscussionForum = () => {
  const dummyMessages = [
    {
      name: "Alice",
      message: "Hello everyone! Excited to discuss here.",
      date: "2024-10-18",
      time: "10:00 AM",
    },
    {
      name: "Bob",
      message:
        "Hi Alice! Welcome to the discussion.Hi Alice! Welcome to the discussion.Hi Alice! Welcome to the discussion.Hi Alice! Welcome to the discussion.Hi Alice! Welcome to the discussion.Hi Alice! Welcome to the discussion.Hi Alice! Welcome to the discussion.",
      date: "2024-10-18",
      time: "10:05 AM",
    },
    {
      name: "Charlie",
      message: "What topics are we discussing today?",
      date: "2024-10-18",
      time: "10:10 AM",
    },
  ];

  return (
    <div className="bg-black min-h-screen p-5">
      <div className="flex flex-col items-center">
        <Heading title="Discussion Forum" />
        <div className="w-full mt-5 space-y-4">
          {" "}
          {/* Added space between messages */}
          {dummyMessages.map((msg, index) => (
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
      </div>
    </div>
  );
};

export default DiscussionForum;
