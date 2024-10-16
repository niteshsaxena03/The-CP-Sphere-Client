// components/RankCard.js
const RankCard = ({ ranking, username, rating }) => {
  // Construct the URL for the LeetCode profile
  const leetcodeProfileUrl = `https://leetcode.com/u/${username}/`;

  return (
    <a
      href={leetcodeProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-red-800 to-blue-800 text-white rounded-lg p-6 m-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex justify-between items-center border border-red-700"
    >
      {/* Left side - Ranking and Username */}
      <div>
        <h2 className="text-5xl font-extrabold text-yellow-300">#{ranking}</h2>
        <h3 className="text-2xl font-semibold mt-2">{username}</h3>
      </div>

      {/* Right side - Rating */}
      <div className="text-right">
        <p className="text-3xl font-bold text-green-300">Rating: {rating}</p>
      </div>
    </a>
  );
};

export default RankCard;
