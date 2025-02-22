import { useState } from "react";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import { itSolutionsData } from "../constants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ITSolutions = () => {
    // Initialize expandedSections state with all indices
    const [expandedSections, setExpandedSections] = useState(
        itSolutionsData.sections.reduce((acc, _, index) => {
            acc[index] = true; // Set all sections to expanded by default
            return acc;
        }, {})
    );

    // Toggle expand/collapse for a specific index
    const toggleSection = (index) => {
        setExpandedSections((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the expanded state for the clicked section
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
                <NavigationBar />
            </div>

            {/* Centered Main Content */}
            <div className="flex-1 flex items-center justify-center px-4 mt-32 pb-24 w-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
                    <h1 className="text-3xl font-bold text-center text-[#f86d4e]">{itSolutionsData.title}</h1>
                    <p className="text-center text-gray-700 mt-2 text-lg">Arahant Services Limited specializes in software, web, database, and app development, along with enterprise solutions, technical consulting, content creation, and training. Our mission is to assist companies and individuals worldwide in streamlining their processes, reducing IT expenses, and improving overall business performance.</p>

                    <div className="mt-6">
                        {itSolutionsData.sections.map((section, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                {/* Section Header */}
                                <div
                                    className="flex justify-between items-center px-6 py-4 bg-[#f86d4e] text-white cursor-pointer"
                                    onClick={() => toggleSection(index)}
                                >
                                    <h2 className="text-lg font-semibold">{section.title}</h2>
                                    {expandedSections[index] ? <FaChevronUp /> : <FaChevronDown />}
                                </div>

                                {/* Expandable Content */}
                                {expandedSections[index] && (
                                    <div className="p-6">
                                        <p className="text-gray-700">{section.description}</p>
                                        {section.items && (
                                            <ul className="mt-3 text-gray-700 list-disc pl-6">
                                                {section.items.map((item, idx) => (
                                                    <li key={idx} className="mb-1">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
};

export default ITSolutions;