import { useState } from "react";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { contact_info } from "../constants";
import { formspreeEndpoint } from "../constants";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(""); 
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("✅ Your Contact Info has been shared with our team. Our experts will get in touch with you shortly. Thank you!");
                setFormData({ name: "", email: "", message: "" }); 
            } else {
                setStatus("❌ Failed to send message. Try again later.");
            }
        } catch (error) {
            setStatus("❌ Error sending message. Please try again.");
        }
    };
    return (
        <div className="flex flex-col min-h-screen text-gray-900">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
                <NavigationBar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 mt-32 pb-24 w-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-[#f86d4e]">Contact Us</h1>
                    <p className="text-center text-gray-700 mt-2 text-lg">
                        Have questions or need assistance? Reach out to us, and we’ll be happy to help!
                    </p>

                    {/* Contact Details */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <FaPhone className="text-[#f86d4e] text-3xl" />
                            <h2 className="mt-2 font-semibold">Phone</h2>
                            <a href={`tel:${contact_info.telephone}`} className="text-gray-800 hover:text-blue-700">
                                +64 211 604 323
                            </a>
                        </div>
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <FaEnvelope className="text-[#f86d4e] text-3xl" />
                            <h2 className="mt-2 font-semibold">Email</h2>
                            <a href={`mailto:${contact_info.mail}`} className="text-gray-800 hover:text-blue-700">
                                support@arahant.co.nz
                            </a>
                        </div>
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <FaMapMarkerAlt className="text-[#f86d4e] text-3xl" />
                            <h2 className="mt-2 font-semibold">Location</h2>
                            <a href={contact_info.location} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="text-gray-800 hover:text-blue-700">
                                518A Great South Road, Rosehill, Auckland 2113
                            </a>
                        </div>
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <FaLinkedin className="text-[#f86d4e] text-3xl" />
                            <h2 className="mt-2 font-semibold">LinkedIn</h2>
                            <a href={contact_info.social} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="text-gray-800 hover:text-blue-700">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-[#f86d4e] text-center">Send Us a Message</h2>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name" 
                                    className="border p-3 rounded-lg w-full" 
                                    required 
                                />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email" 
                                    className="border p-3 rounded-lg w-full" 
                                    required 
                                />
                            </div>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message" 
                                className="border p-3 rounded-lg w-full mt-4 h-32" 
                                required
                            ></textarea>
                            <button type="submit" className="w-full bg-[#f86d4e]! text-white py-3 mt-4 rounded-lg hover:bg-blue-800 transition">
                                Send
                            </button>
                        </form>
                        {status && <p className="mt-4 text-lg">{status}</p>}
                    </div>
                </div>
            </div>

            {/* Fixed Footer & SubFooter */}
            <div className="fixed bottom-1 w-full">
                <SubFooter />
            </div>
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;