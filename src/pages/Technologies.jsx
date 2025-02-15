import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import { technologies } from "../constants";

const Technologies = () => {
    const [expanded, setExpanded] = useState(null);
    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
      };

    return (
        <div className="flex flex-col min-h-screen">
          {/* Fixed Header */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Header />
            <NavigationBar />
          </div>
    
          {/* Centered Main Content */}
          <div className="flex-1 flex flex-grow items-center justify-center px-4 mt-32 pb-24 w-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-center text-blue-900">Our Technologies</h1>
              <p className="text-center text-gray-700 mt-2 text-lg">Expert knowledge in industrial automation</p>
    
              <div className="mt-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    {/* Category Header */}
                    <div
                      className="flex justify-between items-center px-6 py-4 bg-blue-700 text-white cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <h2 className="text-lg font-semibold">{tech.category}</h2>
                      {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
    
                    {/* Expandable Content */}
                    {expanded === index && (
                      <div className="p-6">
                        <p className="text-gray-700">{tech.description}</p>
                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                          {tech.brands.map((brand, idx) => (
                            <li key={idx} className="mb-1">
                              <strong>{brand.name}:</strong> {brand.models.join(", ")}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          {/* Fixed Footer & SubFooter */}
          <div className="fixed bottom-1 w-full">
            <SubFooter />
          </div>
          <div className="fixed bottom-0 left-0 w-full z-50">
            <Footer />
          </div>
        </div>
      );
}

export default Technologies;