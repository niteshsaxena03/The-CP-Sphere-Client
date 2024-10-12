import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Changed to useNavigate
import CardComponent from "../components/CardComponent";
import { useFirebase } from "../Firebase/firebaseContext";

const HomePage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation
  const { logOut, isLoggedIn, user } = useFirebase();

  const [userEmail, setUserEmail] = useState(null);

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

  //console.log("Current User Email:", userEmail);

  const cardData = [
    {
      title: "Contest Reminders",
      description:
        "Stay updated with all upcoming contests. Get timely reminders and notifications to ensure you never miss an opportunity to participate in exciting challenges and competitions.",
      route: "/contest-reminders",
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
      title: "CP Learning Resources",
      description:
        "Access a variety of Competitive Programming resources. These resources will bolster your understanding and application of CP concepts.",
      route: "/cp-learning-resources",
    },
    {
      title: "Discussion Forum",
      description:
        "Join our vibrant community discussion forum. Engage with fellow programmers, ask questions, share knowledge, and collaborate on problems to improve your skills.",
      route: "/discussion-forum",
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
      {/* <h1 className="text-white">{userEmail}</h1>  */}
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
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            route={card.route}
          />
        ))}
      </div>
      {/* Logout Button */}
      <div className="mt-8 w-full max-w-xs">
        <button
          onClick={logOut}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg text-lg font-bold transition duration-200 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
