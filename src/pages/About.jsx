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
                    <div className="flex items-center space-x-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Welcome to Arahant Services Limited! We are a trusted provider of <strong>industrial automation, software development, cloud computing, and IT solutions</strong>. Our mission is to transform businesses by integrating cutting-edge technologies, automating processes, and ensuring seamless IT operations. 
                        </p>
                    </div>
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

                    
                </div>
            </div>

            {/* Footer */}
            <div className="bottom-1 w-full">
                <SubFooter />
            </div>
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
                <Footer />
            </div>
        </div>
    );
}

export default About;