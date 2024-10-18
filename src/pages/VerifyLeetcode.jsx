import { useState } from "react";
import Heading from "../components/HeadingComponent";

const VerifyLeetcode = () => {
  const [username, setUsername] = useState("");
  const [verificationMessage, setVerificationMessage] = useState(""); // State to hold verification message
  const [error, setError] = useState(""); // State to hold error messages

  const handleVerify = async () => {
    if (!username) {
      setError("Please enter your LeetCode username.");
      setVerificationMessage(""); // Clear previous messages
      return;
    }

    try {
      const response = await fetch(
        `https://alfa-leetcode-api.onrender.com/${username}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      const data = await response.json();

      // Check if the user's name is "THECPSPHERE"
      if (data.name === "THECPSPHERE") {
        setVerificationMessage(
          "Verification successful! This ID belongs to you."
        );
        setError(""); // Clear error if verification is successful
      } else {
        setVerificationMessage(
          "This is not your ID. Please ensure you have changed your name correctly."
        );
        setError(""); // Clear error if name does not match
      }
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
      setVerificationMessage(""); // Clear previous messages
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-5 text-white">
      {/* Heading */}
      <Heading title="LeetCode Profile Verification" />

      {/* Instructions */}
      <div className="mt-8 max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Please follow the instructions carefully:
        </h2>

        <ul className="list-decimal list-inside space-y-4">
          <li className="text-lg">
            You need to verify your LeetCode profile so that we can assess
            whether you are eligible to join our platform.
          </li>
          <li className="text-lg">
            For verification, go to the settings of your LeetCode profile and
            change your name to{" "}
            <span className="font-bold text-yellow-400">THECPSPHERE</span>.
            After we verify your profile, you can change your name back.
          </li>
          <li className="text-lg">
            Please wait for 5 minutes after changing your name before clicking
            the <span className="font-bold text-yellow-400">Verify</span>{" "}
            button.
          </li>
          <li className="text-lg">
            Click on the{" "}
            <span className="font-bold text-yellow-400">Verify</span> button
            below after you have changed your name, and we will let you know
            whether you are eligible or not.
          </li>
        </ul>

        {/* Input field for username */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter your LeetCode username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 w-full rounded-lg border border-gray-600 bg-gray-700 text-white"
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {/* Verify Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleVerify}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Verify
          </button>
        </div>
      </div>

      {/* Display verification message if available */}
      {verificationMessage && (
        <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="text-lg">{verificationMessage}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyLeetcode;
