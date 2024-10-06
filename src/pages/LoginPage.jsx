import "../index.css"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { useFirebase } from "../Firebase/firebaseContext";

const LoginPage = () => {
  const navigate = useNavigate();

  // State to store email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error messages

  const { loginUserWithEmailAndPassword, isLoggedIn } = useFirebase();

  // Redirect if user is already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const result = await loginUserWithEmailAndPassword(email, password);

      if (result) {
        console.log("Login Successful");
        navigate("/home"); // Redirect to home on successful login
      } else {
        setError("Invalid email or password."); // Set error message if login fails
        console.log("Login Failed");
      }
    } catch (error) {
      setError("Invalid email or password."); // Set error message if there's an error
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Spline Animation */}
      <div className="w-3/5 hidden sm:block h-full relative">
        <Spline scene="https://prod.spline.design/WGLaTg7I4Nz0dN2N/scene.splinecode" />
      </div>

      {/* Login Card */}
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-md m-auto sm:w-2/5">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-white text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-900"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-900"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin} // Call handleLogin on click
          className="w-full bg-sky-900 hover:bg-blue-950 text-white p-3 rounded-md text-lg font-semibold"
        >
          Login
        </button>

        {/* Sign Up Redirect */}
        <div className="text-white mt-6 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-sky-400 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
