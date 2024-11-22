import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useFirebase } from "../Firebase/firebaseContext";
import api from "../axios"; // Assuming this is your axios instance

const SignUpPage = () => {
  const navigate = useNavigate();

  // State for each input field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [leetcodeUsername, setLeetCodeUsername] = useState(""); // New state for LeetCode username

  const { signUpUserWithEmailAndPassword, isLoggedIn, user } = useFirebase();

  useEffect(() => {
    // Check if the user is logged in and navigate accordingly
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, user]); // Add dependencies

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign up the user using Firebase
      const userCredential = await signUpUserWithEmailAndPassword(
        email,
        password
      );

      const firebaseUser = userCredential.user;

      // Send user data to the server for storing in MongoDB
      await api.post("/api/v1/users/signup", {
        fullName,
        email: firebaseUser.email, // Use email from Firebase response
        experienceLevel,
        firebaseUid: firebaseUser.uid, // Store Firebase UID for later reference
      });

      // After the user is created, now add the LeetCode username
      await api.post("/api/v1/leetcode/leetcode-username", {
        username: leetcodeUsername, // Send the LeetCode username to the backend
      });

      console.log("Signup successful and data saved in MongoDB");
      // Redirect to home or any other page after successful signup
      navigate("/home");
    } catch (error) {
      console.error("Error during signup or saving to MongoDB:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black ">
      <div className="hidden sm:block w-2/5 h-screen mb-20">
        <Spline scene="https://prod.spline.design/nn-BixGMAPZYBdcr/scene.splinecode" />
      </div>
      {/* Sign Up Card */}
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-md m-10 sm:w-3/5">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-white text-lg mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Update fullName state
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-900"
            placeholder="Enter your full name"
            required
          />
        </div>

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
            required
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
            placeholder="Enter password (minimum 6 letters)"
            required
          />
        </div>

        {/* LeetCode Username Input */}
        <div className="mb-4">
          <label
            className="block text-white text-lg mb-2"
            htmlFor="leetcodeUsername"
          >
            LeetCode Username
          </label>
          <input
            type="text"
            id="leetcodeUsername"
            value={leetcodeUsername}
            onChange={(e) => setLeetCodeUsername(e.target.value)} // Update LeetCode username state
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-900"
            placeholder="Enter your LeetCode username"
            required
          />
        </div>

        {/* Experience Level Input */}
        <div className="mb-4">
          <label
            className="block text-white text-lg mb-2"
            htmlFor="experienceLevel"
          >
            Experience Level
          </label>
          <select
            id="experienceLevel"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)} // Update experienceLevel state
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-900"
            required
          >
            <option value="">Select Experience Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit} // Call handleSubmit on click
          className="w-full bg-sky-900 hover:bg-blue-950 text-white p-3 rounded-md text-lg font-semibold"
        >
          Sign Up
        </button>

        {/* Login Redirect */}
        <div className="text-white mt-6 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
