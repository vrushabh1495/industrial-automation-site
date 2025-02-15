const Card = ({ imgSrc, title, subtitle, description }) => {
  return (
    <div className="max-w-sm border-4 rounded-lg overflow-hidden shadow-2xl bg-white p-6 m-2 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img src={imgSrc} className="w-full h-48 object-cover" alt={title} />

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-2 text-center">{title}</h2>

      {/* Subtitle */}
      <h3 className="text-lg font-semibold text-gray-600 mb-4 text-center">{subtitle}</h3>

      {/* Description */}
      <p className="text-gray-700 text-base text-center">{description}</p>
    </div>
  );
};

export default Card;

