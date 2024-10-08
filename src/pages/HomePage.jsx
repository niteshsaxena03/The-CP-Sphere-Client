import CardComponent from "../components/CardComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../Firebase/firebaseContext";

const HomePage = () => {
  const cardData = [
    {
      title: "Contest Reminders",
      description:
        "Stay updated with all upcoming contests. Get timely reminders and notifications to ensure you never miss an opportunity to participate in exciting challenges and competitions.",
      route: "/contest-reminders",
    },
    {
      title: "User Profile",
      description:
        "Access and manage your personal information effortlessly. Update your details, view your activity history, and customize your preferences to enhance your experience on our platform.",
      route: "/user-profile",
    },
    {
      title: "List of Unsolved Questions",
      description:
        "Keep track of the questions you haven't solved yet. This feature allows you to manage your progress, ensuring that you focus on enhancing your skills and tackling challenging problems.",
      route: "/unsolved-questions",
    },
    {
      title: "CP Templates",
      description:
        "Discover a curated list of competitive programming templates. These include various algorithms to help you sharpen your skills and gain a competitive edge.",
      route: "/cp-resources",
    },
    {
      title: "DSA Resources",
      description:
        "Access a variety of Data Structures and Algorithms resources. From in-depth guides to practice problems, these resources will bolster your understanding and application of DSA concepts.",
      route: "/dsa-resources",
    },
    {
      title: "Discussion Forum",
      description:
        "Join our vibrant community discussion forum. Engage with fellow programmers, ask questions, share knowledge, and collaborate on problems to improve your skills.",
      route: "/discussion-forum",
    },
    {
      title: "Rank List",
      description:
        "Check out the rank list to see where you stand among your peers. Track your progress and strive to improve your competitive programming skills with friendly competition.",
      route: "/rank-list",
    },
    {
      title: "Contact Admin",
      description:
        "Have questions or need assistance? Reach out to our admin team for support. We're here to help you with any issues you may encounter on your journey through competitive programming.",
      route: "/contact-admin",
    },
  ];

  return (
    <div className="bg-black min-h-screen p-5 md:p-10 flex flex-col items-center">
      {/* Main Welcome Card */}
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg mb-8 w-full max-w-5xl text-center border border-cyan-500">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          Welcome to The CP Sphere
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Elevate your competitive programming skills with curated challenges
          and resources.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            route={card.route}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
