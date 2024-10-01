import "../index.css"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-center w-1/2 p-10">
        {" "}
        {/* Increased size with w-1/2 */}
        <h1 className="text-6xl font-bold text-white mb-6">The CP Sphere</h1>
        <span className="text-3xl text-white mb-10">Welcomes You!</span>
        <div className="flex space-x-6">
          <button
            className="text-white w-40"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="text-white w-40"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Right Side (Spline) */}
      <div className="w-1/2">
        <Spline scene="https://prod.spline.design/Pd8e2-s6ofw9jEYN/scene.splinecode" />
      </div>
    </div>
  );
};

export default WelcomePage;
