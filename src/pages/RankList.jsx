import Heading from "../components/HeadingComponent";
import RankCard from "../components/RankCard";

const RankList = () => {
  // Dummy data for users with rankings, usernames, and ratings
  const dummyRankings = [
    { ranking: 1, username: "niteshsaxena03", rating: 2400 },
    { ranking: 2, username: "jane_smith", rating: 2300 },
    { ranking: 3, username: "leet_master", rating: 2500 },
    { ranking: 4, username: "coder_123", rating: 2200 },
  ];

  // Sort the rankings based on rating in descending order
  const sortedRankings = dummyRankings.sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-black min-h-screen p-5">
      {/* Heading Section */}
      <Heading title="LeetCode Rank List" />

      {/* Rank Cards */}
      <div className="w-full max-w-4xl mx-auto mt-8">
        {sortedRankings.map((user, index) => (
          <RankCard
            key={index}
            ranking={index + 1} // Rank after sorting by rating
            username={user.username}
            rating={user.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default RankList;
