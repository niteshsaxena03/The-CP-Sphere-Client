import { useEffect, useState } from "react";
import Heading from "../components/HeadingComponent";
import RankCard from "../components/RankCard";
import api from "../axios"; // Assuming this is your axios instance

const RankList = () => {
  const [usernames, setUsernames] = useState([]); // State to hold fetched usernames
  const [error, setError] = useState(""); // State to hold error messages

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await api.get("/api/v1/leetcode/leetcode-username"); // Fetch usernames
        const fetchedUsernames = response.data[0]?.usernames || []; // Extract usernames
        setUsernames(fetchedUsernames); // Update state
      } catch (error) {
        console.error("Error fetching usernames:", error);
        setError("Failed to fetch usernames."); // Set error message
      }
    };

    fetchUsernames();
  }, []);

  return (
    <div className="bg-black min-h-screen p-5">
      {/* Heading Section */}
      <Heading title="LeetCode Rank List" />

      {/* Error Message */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Rank Cards */}
      <div className="w-full max-w-4xl mx-auto mt-8">
        {usernames.map((username, index) => (
          <RankCard
            key={username} // Assuming username is unique
            ranking={index + 1} // Rank based on order
            username={username} // Use the fetched username
            rating={0} // Use dummy rating or default to 0
          />
        ))}
      </div>
    </div>
  );
};

export default RankList;
