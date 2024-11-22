import "../index.css"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useFirebase } from "../Firebase/firebaseContext";
import { useEffect } from "react";

const WelcomePage = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useFirebase();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-center w-full p-10 sm:w-1/2">
        {" "}
        {/* Full width on small screens */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          The CP Sphere
        </h1>
        <span className="text-2xl sm:text-3xl text-white mb-10">
          Welcomes You!
        </span>
        <div className="flex space-x-6">
          <button
            className="text-white w-40"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="text-white w-40"
            onClick={() => navigate("/verify-leetcode")}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Right Side (Spline) - Hidden on small screens */}
      <div className="hidden sm:block w-1/2">
        <Spline scene="https://prod.spline.design/Pd8e2-s6ofw9jEYN/scene.splinecode" />
      </div>
    </div>
  );
};

export default WelcomePage;
