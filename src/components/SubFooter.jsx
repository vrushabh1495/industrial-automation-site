import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const SubFooter = () => {
  return (
    <div className="dark:bg-gray-300 text-white w-full py-6 px-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
      {/* Phone */}
      <a
        href="tel:+64211825303"
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaPhone className="text-xl" />
        <span>+64 211 825 303</span>
      </a>

      {/* Email */}
      <a
        href="mailto:sushant@arahant.co.nz"
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaEnvelope className="text-xl" />
        <span>sushant@arahant.co.nz</span>
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sushant-kadole-ab176253"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaLinkedin className="text-xl" />
        <span>LinkedIn</span>
      </a>
      {/* Location */}
      <a
        href="https://maps.google.com/?q=518A Great South Road, Rosehill, Auckland 2113"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaMapMarkerAlt className="text-xl" />
        <span>518A Great South Road, Rosehill, Auckland 2113</span>
      </a>
    </div>
  );
};

export default SubFooter;
