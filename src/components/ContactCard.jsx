const ContactCard = ({ href, iconSrc, title }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-start bg-gray-700 hover:bg-gray-900 text-white p-4 md:p-6 rounded-lg transition"
    >
      <span className="flex items-center">
        <img
          src={iconSrc}
          alt={`${title} Icon`}
          className="h-10 w-10 md:h-16 md:w-16 mr-4" // Responsive icon size
        />
        <span className="text-xl md:text-2xl font-bold">{title}</span>
      </span>
    </a>
  );
};

export default ContactCard;
