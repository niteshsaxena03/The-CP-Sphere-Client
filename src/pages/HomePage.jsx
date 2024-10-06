import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-black min-h-screen p-5 md:p-10 flex flex-col items-center">
      {/* Main Welcome Card with cyan (Option 1) */}
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
        {/* Contest Reminders Card (Option 5 with green) */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/contest-reminders")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            Contest Reminders
          </h2>
          <p className="text-white text-sm md:text-base">
            Stay updated with all upcoming contests. Get timely reminders and
            notifications to ensure you never miss an opportunity to participate
            in exciting challenges and competitions.
          </p>
        </div>

        {/* User Profile Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/user-profile")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            User Profile
          </h2>
          <p className="text-white text-sm md:text-base">
            Access and manage your personal information effortlessly. Update
            your details, view your activity history, and customize your
            preferences to enhance your experience on our platform.
          </p>
        </div>

        {/* List of Unsolved Questions Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/unsolved-questions")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            List of Unsolved Questions
          </h2>
          <p className="text-white text-sm md:text-base">
            Keep track of the questions you haven't solved yet. This feature
            allows you to manage your progress, ensuring that you focus on
            enhancing your skills and tackling challenging problems.
          </p>
        </div>

        {/* CP Resources Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/cp-resources")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            CP Resources
          </h2>
          <p className="text-white text-sm md:text-base">
            Discover a curated list of competitive programming resources. These
            include tutorials, articles, and tools to help you sharpen your
            skills and gain a competitive edge.
          </p>
        </div>

        {/* DSA Resources Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/dsa-resources")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            DSA Resources
          </h2>
          <p className="text-white text-sm md:text-base">
            Access a variety of Data Structures and Algorithms resources. From
            in-depth guides to practice problems, these resources will bolster
            your understanding and application of DSA concepts.
          </p>
        </div>

        {/* Discussion Forum Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/discussion-forum")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            Discussion Forum
          </h2>
          <p className="text-white text-sm md:text-base">
            Join our vibrant community discussion forum. Engage with fellow
            programmers, ask questions, share knowledge, and collaborate on
            problems to improve your skills.
          </p>
        </div>

        {/* Rank List Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/rank-list")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            Rank List
          </h2>
          <p className="text-white text-sm md:text-base">
            Check out the rank list to see where you stand among your peers.
            Track your progress and strive to improve your competitive
            programming skills with friendly competition.
          </p>
        </div>

        {/* Contact Admin Card */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
          onClick={() => navigateTo("/contact-admin")}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            Contact Admin
          </h2>
          <p className="text-white text-sm md:text-base">
            Have questions or need assistance? Reach out to our admin team for
            support. We're here to help you with any issues you may encounter on
            your journey through competitive programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
