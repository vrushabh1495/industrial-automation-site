import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { landing_page_carousel_data } from "../constants";
import { landing_page_text_description } from "../constants";
import { carousel_settings_global } from "../constants";
import { customerLogos } from "../constants";
import NextArrow from "../components/Arrows/NextArrow";
import PrevArrow from "../components/Arrows/PrevArrow";
import Card from "../components/Card";
import { cardData } from "../constants";
import SubFooter from "../components/SubFooter";

const Home = () => {
    // Carousel settings for the moving customer logos
    const carousel_settings_customer_logos = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
        responsive: [ 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    // Updating the carousel settings to add Next and Prev Arrow icons which are clickable.
    const carousel_settings = {
        ...carousel_settings_global, 
        nextArrow: <NextArrow />,    
        prevArrow: <PrevArrow />     
    };
    return (
        <div className="flex flex-col min-h-screen">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
                <NavigationBar />
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-hidden pb-32"> {/* Add padding-bottom to prevent overlap */}
                <div className="relative max-w-[100vw] p-2 pt-16 overflow-hidden h-[60vh]">
                    <Slider {...carousel_settings}>
                        {landing_page_carousel_data.map((item) => (
                            <div key={item.id}>
                                <div className="relative">
                                    <img 
                                        src={item.img} 
                                        alt={item.text}
                                        className="w-screen h-[60vh] object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center bg-black/20">
                                        <div className="p-8 ml-12">
                                            <h2 className="text-6xl font-bold text-white drop-shadow-lg">
                                                {item.text}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <hr className="my-4 mx-16 border-t-2 border-[#f86d4e]" />
                
                <div className="text-center my-2 py-2">
                    <h2 className="text-[#f86d4e] text-2xl font-semibold">Arahant Services - Automating the World</h2>
                </div>
                
                <hr className="my-4 mx-172 border-t-2 border-[#f86d4e]" />
                
                <div className="px-8 mx-4 rounded-2xl">
                    <div className="mx-auto text-center">
                        <p className="text-3xl text-gray-700">
                            {landing_page_text_description}
                        </p>
                    </div>
                </div>
                
                <hr className="my-4 mx-16 border-t-2 border-[#f86d4e]" />
                
                <div className="pb-2">
                    <div className="rounded-2xl">
                        <div className="mx-auto text-center">
                            <p className="text-2xl text-[#f86d4e] font-medium p-2">Range of Services</p>
                        </div>
                    </div>
                </div>

                <hr className="my-4 mx-16 border-t-2 border-[#f86d4e]" />
                
                <div className="flex flex-wrap justify-center mb-4">
                    {cardData.map((item) => (
                    <Card
                        key={item.id}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        backText={item.backText}
                    />
                    ))}
                </div>
                <hr className="my-4 mx-16 border-t-2 border-[#f86d4e]" />
                <div className="pb-2">
                    <div className="rounded-2xl">
                        <div className="mx-auto text-center">
                            <p className="text-2xl text-[#f86d4e] font-medium p-2">Our Most Trusted Partners</p>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-[100vw] pb-8 overflow-hidden">
                    <Slider {...carousel_settings_customer_logos}>
                        {customerLogos.map((item) => (
                            <div key={item.id} className="px-1">
                                <div className="flex items-center justify-center">
                                    <img 
                                        src={item.imgSrc} 
                                        alt={item.text}
                                        className="w-32 h-32 object-contain" // Adjust logo size
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>

            {/* Fixed SubFooter */}
            <div className="fixed bottom-0 left-0 w-full z-40 bg-white shadow-md">
                <SubFooter />
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Home;