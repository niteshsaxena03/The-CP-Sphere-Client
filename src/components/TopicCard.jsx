// components/TopicCard.js
const TopicCard = ({ title }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 m-2 text-center border border-red-600 flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
};

export default TopicCard;
