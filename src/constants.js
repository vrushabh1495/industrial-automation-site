// These are the carousel settings uniform across all the carousel settings in the application
export var carousel_settings_global = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease",
    pauseOnHover: true,
    fade: true
};

// These are the elements in the carousel component which gets displayed when the landing page loads. 
export const landing_page_carousel_data = [
    {
        id: 1,
        img: "src/assets/carousel1.jpg",
        text: "Redefining Industrial Automation"
    },
    {
        id: 2,
        img: "src/assets/carousel2.jpg",
        text: "Improving Efficiency"
    }
];

// This is the text description which gets displayed below the carousel component on the landing page.
export const landing_page_text_description = "We deliver cutting-edge automation solutions across New Zealand, specializing in controllers, PLCs, Motion Control, IOT, and Industry 4.0. From design to commissioning, our expert team ensures seamless integration, rapid troubleshooting, and optimized performance. Whether enhancing small machines or large-scale production plants, we engineer smarter, safer, and more efficient automation systems—empowering businesses to thrive."