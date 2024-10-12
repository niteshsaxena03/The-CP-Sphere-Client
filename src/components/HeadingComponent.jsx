const Heading = ({ title }) => {
  return (
    <div className="rounded-lg p-6 shadow-lg bg-yellow-100 my-6 md:mx-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-center">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
