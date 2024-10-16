import { useEffect, useState } from "react";
import Heading from "../components/HeadingComponent";
import RankCard from "../components/RankCard";
import api from "../axios"; // Assuming this is your axios instance

const RankList = () => {
  const [usernames, setUsernames] = useState([]); // State to hold fetched usernames and ratings

  // Function to fetch contest rating for a given username
  const fetchContestRating = async (username) => {
    try {
      const response = await api.get(
        `https://alfa-leetcode-api.onrender.com/${username}/contest`
      );
      console.log(`Fetched data for ${username}:`, response.data); // Log the response for debugging

      if (
        response &&
        response.data &&
        response.data.contestRating !== undefined
      ) {
          return Math.round(response.data.contestRating);  // Return the contest rating
      }

      console.error(`No contestRating found for ${username}`);
      return null; // Return null if contestRating is not found
    } catch (error) {
      console.error(`Error fetching contest rating for ${username}:`, error);
      return null; // Return null if there's an error
    }
  };

  useEffect(() => {
    const fetchUsernamesAndRatings = async () => {
      try {
        const response = await api.get("/api/v1/leetcode/leetcode-username"); // Fetch usernames
        const fetchedUsernames = response.data[0]?.usernames || []; // Extract usernames
        console.log("Fetched usernames:", fetchedUsernames); // Log fetched usernames for debugging

        if (fetchedUsernames.length === 0) {
          console.error("No usernames fetched."); // Log if no usernames are fetched
          return; // Early return if no usernames
        }

        const ratingsPromises = fetchedUsernames.map(async (username) => {
          const rating = await fetchContestRating(username);
          return { username, rating }; // Create an object with username and rating
        });

        const ratingsArray = await Promise.all(ratingsPromises);
        const validRatings = ratingsArray.filter(
          (data) => data.rating !== null
        );
        validRatings.sort((a, b) => b.rating - a.rating);

        setUsernames(validRatings); // Update state to include sorted ratings
        console.log("Valid ratings:", validRatings); // Log valid ratings for debugging
      } catch (error) {
        console.error("Error fetching usernames:", error);
      }
    };

    fetchUsernamesAndRatings();
  }, []);

  return (
    <div className="bg-black min-h-screen p-5">
      {/* Heading Section */}
      <Heading title="LeetCode Rank List" />

      {/* Rank Cards */}
      <div className="w-full max-w-4xl mx-auto mt-8">
        {usernames.map((userData, index) => (
          <RankCard
            key={index}
            ranking={index + 1} // Rank based on order
            username={userData.username} // Use the fetched username
            rating={userData.rating || 0} // Use the fetched rating
          />
        ))}
      </div>
    </div>
  );
};

//feature completed
export default RankList;
