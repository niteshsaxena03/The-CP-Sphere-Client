
const ContactCard = ({ href, iconSrc, title }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-between bg-gray-700 hover:bg-gray-900 text-white p-6 rounded-lg transition"
    >
      <span className="flex items-center">
        <img
          src={iconSrc}
          alt={`${title} Icon`}
          className="h-20 w-25 mr-6" // Increased icon size
        />
        <span className="text-3xl font-bold">{title}</span>
      </span>
    </a>
  );
};

export default ContactCard;
