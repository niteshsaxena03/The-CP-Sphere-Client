const Heading = ({ title }) => {
  return (
    <div className="p-5 md:p-10 flex flex-col items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4 w-full text-center border border-green-500">
        <h1 className="text-4xl font-bold text-green-400 mb-4">{title}</h1>
      </div>
    </div>
  );
};

export default Heading;
