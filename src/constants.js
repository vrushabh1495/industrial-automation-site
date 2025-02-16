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
        img: "dist/carousel1.jpg",
        text: "Redefining Industrial Automation"
    },
    {
        id: 2,
        img: "dist/carousel2.jpg",
        text: "Improving Efficiency"
    }
];

// This is the text description which gets displayed below the carousel component on the landing page.
export const landing_page_text_description = "We deliver cutting-edge automation solutions across New Zealand, specializing in controllers, PLCs, Motion Control, IIOT, and Industry 4.0. From design to commissioning, our expert team ensures seamless integration, rapid troubleshooting, and optimized performance. Whether enhancing small machines or large-scale production plants, we engineer smarter, safer, and more efficient automation systems—empowering businesses to thrive."

// This are the elements which are rendered in cards in landing page
export const cardData = [
    {
      id: 1,
      imgSrc: "dist/PLCs.jpg",
      title: "PLC",
      subtitle: "Programmable Logic Controller",
      description:
        "A ruggedized industrial computer designed to automate manufacturing processes with high reliability, ease of programming, and real-time fault diagnosis.",
    },
    {
        id: 2,
        imgSrc: "dist/IIOT.jpg",
        title: "IIOT",
        subtitle: "Industrial Internet of Things",
        description:
          "Unlock seamless connectivity between OT, IoT, and IT with a scalable IIoT platform, enabling real-time monitoring, automation, and enhanced security.",
    },
    {
      id: 3,
      imgSrc: "dist/SCADA.jpg",
      title: "SCADA",
      subtitle: "Supervisory Control and Data Acquisition",
      description:
        "A powerful system integrating software and hardware to monitor, control, and analyze industrial processes, ensuring efficiency and reliability.",
    },
    {
      id: 4,
      imgSrc: "dist/HMI.jpg",
      title: "HMI",
      subtitle: "Human-Machine Interface",
      description:
        "An intuitive interface that bridges human operators and machines, providing real-time data visualization, control, and process optimization.",
    },
    {
        id: 5,
        imgSrc: "dist/Robotics.jpg",
        title: "Robotics",
        subtitle: "Smart Automation",
        description:
          "Advanced robotics solutions designed to enhance precision, efficiency, and automation across industries, revolutionizing modern manufacturing.",
    },
    {
        id: 6,
        imgSrc: "dist/Drives&Motion.jpg",
        title: "Drives & Motion",
        subtitle: "Precision Motion Control",
        description:
          "A high-performance system integrating motors, actuators, and feedback mechanisms to enable precise, dynamic motion control in automation.",
    },
    {
        id: 7,
        imgSrc: "dist/Vision.jpg",
        title: "Vision",
        subtitle: "Smart Inspection Systems",
        description:
          "Cutting-edge vision sensors and smart cameras for advanced inspection, ensuring accuracy, defect detection, and seamless automation integration.",
    },
    {
        id: 8,
        imgSrc: "dist/Safety.jpg",
        title: "Safety",
        subtitle: "Industrial Automation Safety",
        description:
          "Proactive safety systems designed to prevent workplace hazards, ensuring compliance, efficiency, and a secure working environment.",
    },
];

// These are the list of technologies displayed in technologies page
export const technologies = [
  {
    category : "Siemens",
    description: "Our Engineering Expert Sushant has been working on all Siemens platforms since 2007. He has done many projects ranging from single PLC to 100’s of PLCs, 100s of motion control servo drives, HMIs & SCADA systems.",
    brands : [
      {
        name: "Siemens",
        models: ["Siemens Range of PLCs and HMI/SCADA"],
      },
      {
        name: "Siemens",
        models: ["Siemens Legacy PLCs"],
      },
      {
        name: "Siemens",
        models: ["Siemens S7-1500, S7-1200, PCS7"],
      },
      {
        name: "Siemens",
        models: ["Siemens Sinamics s120"],
      },
      {
        name: "Siemens",
        models: ["Siemens G120P varibale speed drive" ],
      },
      {
        name: "Siemens",
        models: ["Siemens Siemence AC Drives"],
      },
    ]
  },
  {
    category: "PLCs & Controllers",
    description: "We have expert-level hands-on experience with Siemens PLC platforms.",
    brands: [
      {
        name: "Siemens",
        models: ["Step 5", "Step 7 – 200, 300 & 400 series PLCs", "TIA Portal – 1200 & 1500 series PLCs"],
      },
      {
        name: "Rockwell – Allen Bradley",
        models: ["PLC 5", "SLC 500", "Micrologix", "CompactLogix", "ControlLogix"],
      },
      {
        name: "Schneider",
        models: ["Quantum", "M340 Series"],
      },
      {
        name: "Omron",
        models: ["CX, NJ, CJ Series"],
      },
      {
        name: "Mitsubishi",
        models: ["FX and Q series"],
      },
    ],
  },
  {
    category: "SCADA Systems",
    description: "SCADA solutions for industrial monitoring and control.",
    brands: [
      { name: "Siemens", models: ["WINCC V6.0, WINCC Advanced, WINCC Professional, WINCC Unified"] },
      { name: "AB", models: ["Factory Talk View Network/Site/Machine"] },
      { name: "Schneider", models: ["Vijeo Citect 7.30"] },
      { name: "GE", models: ["iFix"] },
      { name: "Aveva", models: ["Wonderware"] },
      { name: "Inductive Automation", models: ["Ignition"] },
    ],
  },
  {
    category: "Drives & Motion Control",
    description: "Expertise in AC/DC drives, servo drives, and motion controllers.",
    brands: [
      { name: "Siemens", models: ["Sinamics, Simotion, AC/DC Drives"] },
      { name: "Allen Bradley", models: ["PowerFlex AC/DC drives, Kinetix Servo Drives"] },
      { name: "Schneider", models: ["Altivar Drives"] },
    ],
  },
  {
    category: "HMI Solutions",
    description: "Designing user-friendly HMIs for industrial applications.",
    brands: [
      { name: "Siemens", models: ["OP, TP, MP, Comfort Series"] },
      { name: "Allen Bradley", models: ["PanelView HMIs"] },
      { name: "Omron", models: ["NA, NB, NS Series"] },
      { name: "RedLion", models: ["Crimson HMI Systems"] },
    ],
  },
  {
    category: "Robotics & Vision Systems",
    description: "Automation with industrial robots and vision systems.",
    brands: [
      { name: "Robotics", models: ["ABB, Fanuc, Kuka, Hyundai"] },
      { name: "Vision Systems", models: ["Omron FQ2, FQM series"] },
    ],
  },
  {
    category: "Industry 4.0 & IIOT",
    description: "Developing digital manufacturing solutions and custom apps.",
    brands: [
      { name: "Solutions", models: ["Data Collection, Digital Manufacturing, IIOT Integrations"] },
    ],
  },
];

// These are the list of technologies/solutions displayed in itsolutions page
export const itSolutionsData = {
  title: "IT Solutions",
  sections: [
      {
          title: "Web Solutions",
          description: "A professional website creates a lasting impression and expands business reach globally. Our expertise spans the latest technologies:",
          items: ["ASP.NET, MVC, HTML5, PHP, AJAX, Silverlight", "MS SQL Server, SQL Server 7.0/2000, Oracle, MS Access, Crystal Reports", "IIS, ASP, JavaScript, JAVA, Angular JS, React JS, Node JS"]
      },
      {
          title: "Open Source Solutions",
          description: "Open-source technologies provide flexibility and cost-effectiveness. We specialize in:",
          items: ["PHP, WordPress, CakePHP, Magento, OpenCart, Drupal, MySQL, Node JS"]
      },
      {
          title: "Azure/Cloud Solutions",
          description: "Cloud computing offers scalable and cost-effective IT resources. Our services include:",
          items: ["Cloud Advisory Services", "Cloud Migration and Development Services", "Deployment and Managed Services", "Windows Azure Services"]
      },
      {
          title: "Database Solutions",
          description: "Our engineers specialize in designing, implementing, and managing complex database solutions using:",
          items: ["Oracle, MySQL, SQL Server", "Analysis Services, Integration Services, Reporting Services", "SQL Server Infrastructure Review & Performance Tuning"]
      }
  ]
};

// These are all the contact details displayed in both subfooter and the contact us page
export const contact_info = {
  telephone: "+64211825303",
  mail:"sushant@arahant.co.nz",
  location:"https://maps.google.com/?q=518A Great South Road, Rosehill, Auckland 2113",
  social:"https://www.linkedin.com/in/sushant-kadole-ab176253"
}

// Email service Endpoint. Making a POST call to this endpoint will trigger an email to the email id registered in this endpoint. 
export const formspreeEndpoint = "https://formspree.io/f/xzzdjoqy"; 