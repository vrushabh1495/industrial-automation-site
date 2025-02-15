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
export const landing_page_text_description = "We deliver cutting-edge automation solutions across New Zealand, specializing in controllers, PLCs, Motion Control, IIOT, and Industry 4.0. From design to commissioning, our expert team ensures seamless integration, rapid troubleshooting, and optimized performance. Whether enhancing small machines or large-scale production plants, we engineer smarter, safer, and more efficient automation systems—empowering businesses to thrive."

// This are the elements which are rendered in cards in landing page
export const cardData = [
    {
      id: 1,
      imgSrc: "src/assets/PLCs.jpg",
      title: "PLC",
      subtitle: "Programmable Logic Controller",
      description:
        "A ruggedized industrial computer designed to automate manufacturing processes with high reliability, ease of programming, and real-time fault diagnosis.",
    },
    {
        id: 2,
        imgSrc: "src/assets/IIOT.jpg",
        title: "IIOT",
        subtitle: "Industrial Internet of Things",
        description:
          "Unlock seamless connectivity between OT, IoT, and IT with a scalable IIoT platform, enabling real-time monitoring, automation, and enhanced security.",
    },
    {
      id: 3,
      imgSrc: "src/assets/SCADA.jpg",
      title: "SCADA",
      subtitle: "Supervisory Control and Data Acquisition",
      description:
        "A powerful system integrating software and hardware to monitor, control, and analyze industrial processes, ensuring efficiency and reliability.",
    },
    {
      id: 4,
      imgSrc: "src/assets/HMI.jpg",
      title: "HMI",
      subtitle: "Human-Machine Interface",
      description:
        "An intuitive interface that bridges human operators and machines, providing real-time data visualization, control, and process optimization.",
    },
    {
        id: 5,
        imgSrc: "src/assets/Robotics.jpg",
        title: "Robotics",
        subtitle: "Smart Automation",
        description:
          "Advanced robotics solutions designed to enhance precision, efficiency, and automation across industries, revolutionizing modern manufacturing.",
    },
    {
        id: 6,
        imgSrc: "src/assets/Drives&Motion.jpg",
        title: "Drives & Motion",
        subtitle: "Precision Motion Control",
        description:
          "A high-performance system integrating motors, actuators, and feedback mechanisms to enable precise, dynamic motion control in automation.",
    },
    {
        id: 7,
        imgSrc: "src/assets/Vision.jpg",
        title: "Vision",
        subtitle: "Smart Inspection Systems",
        description:
          "Cutting-edge vision sensors and smart cameras for advanced inspection, ensuring accuracy, defect detection, and seamless automation integration.",
    },
    {
        id: 8,
        imgSrc: "src/assets/Safety.jpg",
        title: "Safety",
        subtitle: "Industrial Automation Safety",
        description:
          "Proactive safety systems designed to prevent workplace hazards, ensuring compliance, efficiency, and a secure working environment.",
    },
];

  