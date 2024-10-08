const SectionHeading = ({ title }) => {
  return (
    <div className="p-5 md:p-10 flex flex-col items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg  w-full text-center border border-orange-500">
        <h1 className="text-4xl font-bold text-orange-400 mb-4">{title}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
