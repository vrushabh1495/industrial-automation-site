import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { landing_page_carousel_data } from "../constants";
import { landing_page_text_description } from "../constants";
import { carousel_settings_global } from "../constants";
import NextArrow from "../components/Arrows/NextArrow";
import PrevArrow from "../components/Arrows/PrevArrow";
import Card from "../components/Card";
import { cardData } from "../constants";
import SubFooter from "../components/SubFooter";

const Home = () => {
    // Updating the carousel settings to add Next and Prev Arrow icons which are clickable.
    const carousel_settings = {
        ...carousel_settings_global, 
        nextArrow: <NextArrow />,    
        prevArrow: <PrevArrow />     
    };
    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
                <NavigationBar />
            </div>
            <main className="flex-1 overflow-hidden">
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
                <div className="p-8 bg-gray-200 m-2 rounded-2xl">
                    <div className="mx-auto text-center">
                        <p className="text-4xl text-gray-700 font-medium">
                            {landing_page_text_description}
                        </p>
                    </div>
                </div>
                <div className="pb-2">
                    <div className="bg-gray-200 m-2 rounded-2xl">
                        <div className="mx-auto text-center">
                            <p className="text-4xl text-gray-700 font-medium p-2">Range of Services</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mb-4">
                {cardData.map((item) => (
                    <Card
                        key={item.id}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                    />
                ))}
                </div>
            </main>
            <SubFooter/>
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Home;