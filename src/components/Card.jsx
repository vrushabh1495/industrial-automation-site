import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ imgSrc, title, subtitle, description, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLearnMore = () => {
    navigate("/technologies");
  }

  return (
    <div
      className="max-w-sm border-2 border-[#f86d4e] rounded-lg overflow-hidden shadow-2xl bg-white p-6 m-2 hover:shadow-2xl transition-transform duration-300 cursor-pointer relative"
      onClick={handleFlip}
    >
      {/* Front Side of the Card */}
      <div
        className={`w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className={`w-full h-full backface-hidden ${isFlipped ? "hidden" : "block"}`}>
          {/* Image */}
          <img src={imgSrc} className="w-full h-48 object-cover" alt={title} />

          {/* Horizontal Line Before Title */}
          <hr className="my-4 mx-16 border-t-2 border-[#f86d4e]" />

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-2 text-center">{title}</h2>

          {/* Subtitle */}
          <h3 className="text-lg font-semibold text-gray-600 mb-4 text-center">{subtitle}</h3>

          {/* Horizontal Line After Subtitle */}
          <hr className="my-4 border-t-2 border-[#f86d4e]" />

          {/* Description */}
          <p className="text-gray-700 text-base text-center">{description}</p>
        </div>

        {/* Back Side of the Card */}
        <div
          className={`w-full h-full transform-style-preserve-3d transition-transform duration-500 rotate-y-180 ${isFlipped ? "block" : "hidden"}`}
        >
          <div className="flex items-center justify-center h-full p-6 flex-col">
            <p className="text-2xl text-gray-700 text-center">{backText}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleLearnMore();
                }}
                className="mt-4 px-6 py-2  text-[#f86d4e] rounded-lg transition-colors bg-white! hover:border-white! duration-300"
              >
              Learn More&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;