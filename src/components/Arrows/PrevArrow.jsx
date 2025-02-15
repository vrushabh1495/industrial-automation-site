const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} !z-10 !w-16 !h-16 !left-6 before:!content-[''] rounded-full bg-white/80 hover:bg-white transition-colors`}
        onClick={onClick}
      >
        <svg 
          className="w-10 h-10 mx-auto text-gray-600"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>
    );
};

export default PrevArrow;