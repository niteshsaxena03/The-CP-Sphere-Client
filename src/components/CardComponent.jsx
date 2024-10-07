import { useNavigate } from "react-router-dom";

const CardComponent = ({ title, description, route }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-green-500"
      onClick={() => navigate(route)}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
        {title}
      </h2>
      <p className="text-white text-sm md:text-base">{description}</p>
    </div>
  );
};

export default CardComponent;
