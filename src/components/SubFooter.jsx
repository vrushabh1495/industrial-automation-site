import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { contact_info } from "../constants";

const SubFooter = () => {
  return (
    <div className="dark:bg-gray-300 text-white w-full py-6 px-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
      {/* Phone */}
      <a
        href={`tel:${contact_info.telephone}`}
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaPhone className="text-xl" />
        <span>+64 211 825 303</span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${contact_info.mail}`}
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaEnvelope className="text-xl" />
        <span>sushant@arahant.co.nz</span>
      </a>
      {/* LinkedIn */}
      <a
        href={contact_info.social}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-200"
      >
        <FaLinkedin className="text-xl" />
        <span>LinkedIn</span>
      </a>
      {/* Location */}
      <a
        href={contact_info.location}
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
