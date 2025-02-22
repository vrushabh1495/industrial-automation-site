import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import { technologies } from "../constants";

const Technologies = () => {
    // Initialize expanded state with all indices
    const [expanded, setExpanded] = useState(
        technologies.map((_, index) => index)
    );

    // Toggle expand/collapse for a specific index
    const toggleExpand = (index) => {
        if (expanded.includes(index)) {
            // If the index is already expanded, remove it (collapse)
            setExpanded(expanded.filter((i) => i !== index));
        } else {
            // If the index is not expanded, add it (expand)
            setExpanded([...expanded, index]);
        }
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
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-[#f86d4e]">Our Technologies</h1>
                    <p className="text-center text-gray-700 mt-2 text-lg">Expert knowledge in industrial automation</p>

                    {/* Grid Layout for Side-by-Side Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Siemens Section */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleExpand(0)}
                                >
                                    <h2 className="text-lg font-semibold">{technologies[0].category}</h2>
                                    {expanded.includes(0) ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expanded.includes(0) && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{technologies[0].description}</p>
                                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                                            {technologies[0].brands.map((brand, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* PLCs & Controllers Section */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleExpand(1)}
                                >
                                    <h2 className="text-lg font-semibold">{technologies[1].category}</h2>
                                    {expanded.includes(1) ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expanded.includes(1) && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{technologies[1].description}</p>
                                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                                            {technologies[1].brands.map((brand, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* SCADA Systems Section */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleExpand(2)}
                                >
                                    <h2 className="text-lg font-semibold">{technologies[2].category}</h2>
                                    {expanded.includes(2) ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expanded.includes(2) && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{technologies[2].description}</p>
                                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                                            {technologies[2].brands.map((brand, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Drives & Motion Control Section */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleExpand(3)}
                                >
                                    <h2 className="text-lg font-semibold">{technologies[3].category}</h2>
                                    {expanded.includes(3) ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expanded.includes(3) && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{technologies[3].description}</p>
                                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                                            {technologies[3].brands.map((brand, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* HMI Solutions Section */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleExpand(4)}
                                >
                                    <h2 className="text-lg font-semibold">{technologies[4].category}</h2>
                                    {expanded.includes(4) ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expanded.includes(4) && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{technologies[4].description}</p>
                                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                                            {technologies[4].brands.map((brand, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Robotics & Vision Systems Section */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleExpand(5)}
                                >
                                    <h2 className="text-lg font-semibold">{technologies[5].category}</h2>
                                    {expanded.includes(5) ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                {expanded.includes(5) && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{technologies[5].description}</p>
                                        <ul className="mt-3 text-gray-700 list-disc pl-6">
                                            {technologies[5].brands.map((brand, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* Industry 4.0 & IIOT Section (Full Width) */}
                    <div className="mt-8">
                        <div className="bg-gray-100 rounded-lg overflow-hidden">
                            <div
                                className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                onClick={() => toggleExpand(6)}
                            >
                                <h2 className="text-lg font-semibold">{technologies[6].category}</h2>
                                {expanded.includes(6) ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {expanded.includes(6) && (
                                <div className="p-6">
                                    <p className="text-gray-700">{technologies[6].description}</p>
                                    <ul className="mt-3 text-gray-700 list-disc pl-6">
                                        {technologies[6].brands.map((brand, idx) => (
                                            <li key={idx} className="mb-1">
                                                <strong>{brand.name}:</strong> {brand.models.join(", ")}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                        </div>
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
};

export default Technologies;