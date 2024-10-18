const MessageCard = ({ name, message, date, time, isRightAligned }) => {
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    return `${day}${suffix} ${dateObj.toLocaleString("default", {
      month: "long",
    })} ${dateObj.getFullYear()}`;
  };

  return (
    <div
      className={`bg-gradient-to-r from-[#1A1D4D] to-[#0F3B6C] text-white p-5 rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105 ${
        isRightAligned ? "ml-auto mr-5" : "mr-auto ml-5"
      }`}
      style={{ maxWidth: "60%", width: "100%" }} // Set max width to 60% and full width on mobile
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">{name}</span>
        <span className="text-gray-300 text-right">{formatDate(date)}</span>
      </div>
      <p className="mt-2 text-gray-200">{message}</p>
      <span className="block text-gray-300 text-right">{time}</span>
    </div>
  );
};

export default MessageCard;
