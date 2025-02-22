import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen text-gray-900">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
                <NavigationBar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 mt-8 pb-24 w-screen">
                <div className="mt-8 max-w-4xl">
                    {/* Introduction Section */}
                    <div className="text-center my-2 py-2">
                        <h2 className="text-[#f86d4e] text-2xl font-semibold">Arahant Services - Automating the World</h2>
                    </div>
                    <hr className="my-4 mx-16 border-t-2 border-[#f86d4e]" />
                    <div className="flex items-center space-x-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Welcome to <strong>Arahant Services Limited</strong>! Founded in 2015 by Sushant Kadole, we are a trusted provider of <strong>industrial automation, software development, cloud computing, and IT solutions</strong>. Our mission is to transform businesses by integrating cutting-edge technologies, automating processes, and ensuring seamless IT operations.
                        </p>
                    </div>
                    <hr className="mt-8 mx-16 border-t-2 border-[#f86d4e]" />
                </div>

                {/* Services Section */}
                <div className="mt-12 max-w-4xl space-y-12">
                    {/* Industrial Automation */}
                    <div className="flex items-center p-2 space-x-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Industrial Automation</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                Our industrial automation solutions integrate <strong>PLC, SCADA, IoT</strong>, and advanced control systems to enhance operational efficiency, reduce downtime, and improve overall productivity.
                            </p>
                            <p className="mt-2 text-gray-700">
                                With extensive experience in factory automation, process control, and predictive maintenance, we help industries optimize production and ensure long-term sustainability.
                            </p>
                        </div>
                        <div className="max-w-sm">
                            <img src="./industrial_automation_factory.png" alt="Industrial Automation" className="w-full rounded-lg" />
                        </div>
                    </div>
                    <hr className="mx-16 border-t-2 border-[#f86d4e]" />

                    {/* Software Development */}
                    <div className="flex items-center p-2 space-x-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                        <div className="max-w-sm">
                            <img src="./software_dev.png" alt="Software Development & DevOps" className="w-full rounded-lg" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Software Development & DevOps</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                We develop scalable and high-performance software applications tailored to industry-specific needs. Our expertise includes <strong>React, Node.js, Python, Java</strong>, and <strong>DevOps automation</strong>. We help businesses streamline workflows, improve efficiency, and ensure reliable deployment with CI/CD pipelines.
                            </p>
                            <p className="mt-2 text-gray-700">
                                Our team specializes in both frontend and backend technologies, ensuring seamless integration, security, and maintainability.
                            </p>
                        </div>
                    </div>
                    <hr className="mx-16 border-t-2 border-[#f86d4e]" />

                    {/* Cloud & Database Solutions */}
                    <div className="flex items-center p-2 space-x-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Cloud & Database Solutions</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                We offer robust cloud solutions, database management, and data security services using <strong>AWS, Azure, MySQL, PostgreSQL</strong>, and more. Our solutions ensure optimal data storage, high availability, and enhanced security.
                            </p>
                            <p className="mt-2 text-gray-700">
                                Our cloud strategies help businesses scale dynamically, reduce infrastructure costs, and improve data reliability with efficient backup and disaster recovery plans.
                            </p>
                        </div>
                        <div className="max-w-sm">
                            <img src="./cloud_database.png" alt="Cloud & Database Solutions" className="w-full rounded-lg" />
                        </div>
                    </div>
                    <hr className="mx-16 border-t-2 border-[#f86d4e]" />

                    {/* Business Verticals */}
                    <div className="flex items-center p-2 space-x-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Business Verticals</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                At Arahant Services Limited, we specialize in delivering comprehensive solutions across multiple business verticals. Our expertise spans:
                            </p>
                            <ul className="mt-2 text-gray-700 list-disc pl-6">
                                <li>
                                    <strong>Projects and Services:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Turnkey solutions for small to large-scale projects (1-2 IOs to thousands of IOs).</li>
                                        <li>Mechanical and Electrical Design & Build.</li>
                                        <li>Control System Design, Programming, and Commissioning.</li>
                                        <li>Factory Acceptance Testing (FAT), Site Acceptance Testing (SAT), and Training.</li>
                                        <li>24/7 Maintenance and Support, including breakdown support and urgent services.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Spare Parts Supply:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Supply of mechanical, electrical, and control system parts (PLCs, IO cards, sensors, drives, actuators, power supplies, cables, etc.).</li>
                                        <li>Partnerships with leading brands like Siemens, Rockwell, Omron, Schneider, IFM, Beckhoff, Balluff, Phoenix, Wago, Festo, and SMC.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Food & Beverage Sector:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Automation solutions for process control, batching systems, and Clean-in-Place (CIP).</li>
                                        <li>Expertise in PET, Glass, and Can filling lines.</li>
                                        <li>Seamless integration across various packaging formats for high throughput and reliability.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Material Handling:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Depalletiser and Palletiser solutions.</li>
                                        <li>Product and case conveyor systems, inspection machines, blow moulders, and fillers.</li>
                                        <li>Complete line control solutions for monitoring, controlling, and optimizing production lines.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="max-w-sm">
                            <img src="./business_verticals.png" alt="Business Verticals" className="w-full rounded-lg" />
                        </div> */}
                    </div>
                    <hr className="mx-16 border-t-2 border-[#f86d4e]" />

                    {/* Technical Capabilities */}
                    <div className="flex items-center p-2 space-x-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                        {/* <div className="max-w-sm">
                            <img src="./technical_capabilities.png" alt="Technical Capabilities" className="w-full rounded-lg" />
                        </div> */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Technical Capabilities</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                We specialize in a wide range of industrial automation and control systems, including:
                            </p>
                            <ul className="mt-2 text-gray-700 list-disc pl-6">
                                <li>
                                    <strong>PLCs (Programmable Logic Controllers):</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Siemens (S5, S7-200, S7-300, S7-400, S7-1200, S7-1500 Series)</li>
                                        <li>Allen Bradley (Control/Compact/Micro Logix, PLC-5, SLC500, 5000 Series)</li>
                                        <li>Schneider (Quantum, M340 Series)</li>
                                        <li>Omron (CX Series)</li>
                                        <li>Mitsubishi (FX and Q Series)</li>
                                        <li>Wago</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Drives and Motion Control:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Siemens (Simotion, Sinamics, Simodrive, Master Drives)</li>
                                        <li>Allen Bradley (PowerFlex, Kinetix)</li>
                                        <li>Schneider (Altivar, Lexium)</li>
                                        <li>SEW (Movidrive, Movimot)</li>
                                        <li>Danfoss (VLT, FC Series)</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>HMI/SCADA (Human-Machine Interface/Supervisory Control and Data Acquisition):</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Siemens (WinCC, TP, MP, Comfort, Unified Series)</li>
                                        <li>Allen Bradley (PanelView, FactoryTalk View)</li>
                                        <li>Schneider (Vijeo Citect)</li>
                                        <li>Wonderware (InTouch, System Platform)</li>
                                        <li>Ignition by Inductive Automation</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Robotics:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>ABB (IRB Series)</li>
                                        <li>KUKA (KR Series)</li>
                                        <li>Fanuc (LR, M Series)</li>
                                        <li>Hyundai (HH Series)</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>IIoT & Industry 4.0:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Data collection and integration using OPC (Open Platform Communications).</li>
                                        <li>Database integration for real-time analytics and predictive maintenance.</li>
                                        <li>Smart factory solutions for enhanced connectivity and automation.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Safety Systems:</strong>
                                    <ul className="mt-1 list-circle pl-6">
                                        <li>Risk assessment and safety evaluation.</li>
                                        <li>Compliance with international safety standards (e.g., ISO 13849, IEC 62061).</li>
                                        <li>Certified Machinery Safety Expert (CMSE®) by TÜV NORD.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <hr className="mx-16 border-t-2 border-[#f86d4e]" /> */}

                    {/* Top Customers */}
                    {/* <div className="flex items-center p-2 space-x-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Top Customers</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                We are proud to serve some of the leading companies in the industry, including:
                            </p>
                            <ul className="mt-2 text-gray-700 list-disc pl-6">
                                <li>Suntory Beverages & Food New Zealand Limited</li>
                                <li>Coca-Cola Europacific Partners (NZ) Limited</li>
                                <li>Asaleo Care Limited</li>
                                <li>Fiji Water (Natural Waters of Viti Pte Ltd)</li>
                                <li>The University of Waikato</li>
                            </ul>
                        </div>
                        <div className="max-w-sm">
                            <img src="./top_customers.png" alt="Top Customers" className="w-full rounded-lg" />
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Footer */}
            <div className="fixed bottom-1 w-full">
                <SubFooter />
            </div>
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
                <Footer />
            </div>
        </div>
    );
};

export default About;