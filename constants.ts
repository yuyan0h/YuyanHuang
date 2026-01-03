import { Education, Project, Publication, Award, Experience, PhotographyProject } from './types';

export const PERSONAL_INFO = {
  name: "Yuyan Huang",
  title: "",
  university: "Tongji University",
  email: "huangyuyan@tongji.edu.cn",
  email2: "yuyan2048h@gmail.com",
  researchGate: "https://www.researchgate.net/profile/Yuyan-Huang-11",
  github: "https://github.com/yuyan0h/YuyanHuang",
  cvLink: "#", 
  introHeader: "👋 Hi there, I'm Yuyan.",
  bio: [
    "I am a Master's student in Urban Planning at Tongji University and I am currently seeking a PhD position in related areas. My academic research focuses on LLM applications in cities, the urban food environment, and the broader urban environment. I strive to use data-driven approaches to solve complex urban challenges, particularly in carbon mitigation and sustainable food systems.",
    "I am conducting research at SuSmart City Lab (Tongji University). Previously, I worked at Long Lab. in the University of Tokyo, and Professors Yue Zhang and Liyuan Zhang's group (Chang'an University)."
  ],
};

export const EDUCATION: Education[] = [
  {
    institution: "Tongji University (QS 192, 985 project)",
    location: "Shanghai, China",
    degree: "M.Eng in Urban Planning",
    duration: "2023 – 2026 (Expected)",
    gpa: "4.14/5.0 (Top 5%)",
    details: [
      "Thesis: LLM-Assisted Knowledge Graphs for Urban Carbon Mitigation and Governance"
    ]
  },
  {
    institution: "Chang’an University (211 project)",
    location: "Xi’an, China",
    degree: "B.Eng. in Urban Planning",
    duration: "2018 – 2023",
    gpa: "3.88/5.0 (Top 3%)"
  }
];

export const RESEARCH_PROJECTS: Project[] = [
  // #1
  {
    category: "#1 AI FOR URBAN SUSTAINABILITY",
    title: "LLM-Assisted Knowledge Graphs for Urban Carbon Mitigation Governance",
    role: "Master Thesis",
    advisor: "Chao Liu (Tongji University)",
    duration: "Aug 2024 – Dec 2025",
    description: [
      "Authored comprehensive literature reviews on urban informatics and the applications of LLMs in urban planning contexts.",
      "Constructed a multi-source heterogeneous dataset integrating China’s carbon emission, socio-economic, academic, case analysis, and policy data.",
      "Enhanced retrieval performance through vector-based RAG pipelines using LLM APIs (achieved 92.5% accuracy).",
      "Extracted and visualized over 100,000 knowledge triples with top-down ontology design and bottom-up GraphRAG extraction.",
      "Developed four cooperative AI agents to generate city-level carbon emission reports, integrated into the C-SmartGPT system."
    ]
  },
  {
    category: "#1 AI FOR URBAN SUSTAINABILITY",
    title: "Deep Reinforcement Learning for Urban Public Transit Route Optimization",
    role: "Leader",
    advisor: "Zhong-Ren Peng (University of Florida); Dongjie Wang (University of Kansas)",
    duration: "July 2025",
    description: [
      "Implemented deep reinforcement learning models using OD data to optimize bus routes and scheduling in Tampa, Florida.",
      "Led the front-end development of TAMPUS, an html-based platform integrating LLM APIs to visualize and enhance the usability of transit optimization results."
    ]
  },
  {
    category: "#1 AI FOR URBAN SUSTAINABILITY",
    title: "Spatial-temporal Characteristics and Non-linear Influencing Factors of CO2 Distribution in City Clusters",
    role: "Main Researcher",
    advisor: "Chao Liu (Tongji University)",
    duration: "Sept 2023 – Feb 2024",
    description: [
      "Analyzed annual county-level carbon emissions in the Yangtze River Delta and Guanzhong City Clusters to identify spatial-temporal distribution patterns via spatial autocorrelation.",
      "Utilized machine learning models to examine socioeconomic and built environment factors influencing carbon emissions."
    ]
  },
  // #2
  {
    category: "#2 URBAN FOOD SUSTAINABILITY TRANSITION",
    title: "Disparities in access to sustainable dining options across the Tokyo Metropolis",
    role: "Main Researcher",
    advisor: "Liqiao Huang & Yin Long (The University of Tokyo)",
    duration: "Nov 2023 – June 2024",
    description: [
      "Collected and analyzed data from over 100,000 restaurants near Tokyo railway stations to quantify menu-level carbon footprints and food-related emissions.",
      "Developed the SDOI (Sustainable Dining Options Index) framework integrating five dimensions—environmental impact, nutritional value, affordability, crowd density, and menu variability—to evaluate restaurant sustainability.",
      "Conducted scenario-based analyses and designed interactive data visualizations to reveal spatial disparities and propose pathways for Tokyo’s sustainable dining transition."
    ]
  },
  {
    category: "#2 URBAN FOOD SUSTAINABILITY TRANSITION",
    title: "Sustainable Dining-out Report Series (1-4) with Long Laboratory",
    role: "Main Researcher",
    advisor: "Yin Long (The University of Tokyo)",
    duration: "Dec 2023 – Aug 2025",
    description: [
      "Contributed to four research reports on urban dining sustainability. Led visual communication, illustration, and layout design, ensuring clarity, coherence, and effective dissemination of scientific insights.",
      "Report 1: Carbon footprint analysis of ingredients and cooking methods.",
      "Report 2: Sustainability assessment of dining-out environment in Tokyo.",
      "Report 3: Environmental impact evaluation and carbon quantification of Sichuan and Cantonese cuisines.",
      "Report 4: Comparative life-cycle analysis of six major Chinese regional cuisines."
    ]
  },
  // #3
  {
    category: "#3 URBAN ENVIRONMENT AND HUMAN–LAND INTERACTION",
    title: "Air Pollution Characteristics and Human Health Risk Assessment of Under-ground Parking Garages",
    role: "Leader",
    advisor: "Liyuan Zhang & Yue Zhang (Chang’an University)",
    duration: "Jun 2020 – Feb 2022",
    description: [
      "Monitored air pollutants (PM2.5, PM10, TVOC, and Benzene) and human activity patterns across 12 underground parking garages over four seasons.",
      "Tracked pedestrian movement and behavioral flow lines to assess exposure dynamics within enclosed environments.",
      "Evaluated human health risks for workers, children, and adults under U.S. EPA risk assessment standards."
    ]
  },
  {
    category: "#3 URBAN ENVIRONMENT AND HUMAN–LAND INTERACTION",
    title: "Idle Land Use Efficiency in Large Archaeological Site Area",
    role: "Leader",
    advisor: "Wenliang Chen (Chang’an University)",
    duration: "Sept 2021 – Feb 2022",
    description: [
      "Applied remote sensing image recognition to classify land-use types and identify idle land in large archaeological site zones.",
      "Conducted field investigations and semi-structured interviews with residents to categorize patterns of abandoned land use and propose reuse strategies."
    ]
  },
  {
    category: "#3 URBAN ENVIRONMENT AND HUMAN–LAND INTERACTION",
    title: "Climate Change Economics Group, University College London",
    role: "Research Assistant",
    advisor: "Mentor: Dr. Haoran Zhang (University College London)",
    duration: "Mar 2023 - May 2023",
    description: [
      "Performed data collection and processing concerning IPCC reports and participated in literature search and analysis."
    ]
  },
  // #4
  {
    category: "#4 URBAN DECISION-SUPPORT PROJECTS",
    title: "C-Smart 2.0: Carbon Comprehensive Visualization Platform",
    role: "Product Manager & UIUX Designer",
    advisor: "SuSmart City Lab, Tongji University",
    duration: "Sept 2024 - Present",
    description: [
      "Designed product requirements and natural-language interaction features for a carbon and pollution visualization platform targeting policymakers and the public.",
      "Integrated multi-scale visualization systems (city, district, and building levels) to enable comprehensive carbon-emission data analysis and comparative evaluation.",
      "Designed and implemented a user-centered front-end interface, supporting real-time exploration and interpretation of carbon indicators for diverse stakeholder groups."
    ]
  },
  {
    category: "#4 URBAN DECISION-SUPPORT PROJECTS",
    title: "Building an Index System for Green, Low-Carbon and High-Quality Development in Ningbo, China",
    role: "Main Researcher",
    advisor: "Tongji Urban Planning & Design Institute Co., LTD.",
    duration: "Sept 2024 - Apr 2025",
    description: [
      "Developed a comprehensive Sustainable Development Index system for Ningbo, covering five key dimensions: ecological environment, energy efficiency, economic development, social well-being, and governance.",
      "Designed and implemented a relational database to store and manage multi-source urban sustainability data.",
      "Created interactive visualization dashboards to display real-time metrics, enabling stakeholders to monitor and evaluate policy outcomes effectively. (Funded by World Bank)"
    ]
  },
  {
    category: "#4 URBAN DECISION-SUPPORT PROJECTS",
    title: "Smart City Brain Top-level Architecture Design in cities in Yunnan Province & Xinjiang Autonomous Region",
    role: "Assistant Planner",
    advisor: "Tongji Urban Planning & Design Institute Co., LTD.",
    duration: "Sept 2023 - Apr 2024",
    description: [
      "Surveyed the smart city structure and designed a ‘city brain’ structure for a city in Xinjiang autonomous region, China.",
      "Collaborated with 5 designers and consultants on smart city planning texts for a city in Yunnan Province, China."
    ]
  },
  {
    category: "#4 URBAN DECISION-SUPPORT PROJECTS",
    title: "City Check-up Indicator Design for Nanchang City, Jiangxi Province",
    role: "Planning Intern",
    advisor: "Jiangxi Provincial Research Institute of Human Settlements Environment",
    duration: "July 2022 - Sept 2022",
    description: [
      "Summarized official documents and guidance for official evaluation of urban construction.",
      "Supported defining 10 main evaluation categories and 120 quantified indexes in evaluation by the government."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  // Journals
  {
    type: 'Journal Papers',
    authors: "Huang, Y., et al.",
    year: "2025",
    title: "LLM-Empowered Knowledge Graph Construction for Urban Carbon Emission Governance",
    venue: "In preparation"
  },
  {
    type: 'Journal Papers',
    authors: "Huang, Y., Li, H., Lu, Y., Wu, R., Chen, S., & Liu, C.",
    year: "2025",
    title: "Evidence-Grounded Multi-Agent Planning Support for Urban Carbon Governance via Retrieval-Augmented Generation",
    venue: "arXiv preprint"
  },
  {
    type: 'Journal Papers',
    authors: "Huang, L., Huang, Y., et al.",
    year: "2025",
    title: "Disparities in access to sustainable dining options across the Tokyo Metropolis",
    venue: "Nature Cities",
    link: "https://doi.org/10.1038/s44284-025-00235-9"
  },
  {
    type: 'Journal Papers',
    authors: "Niu, N., Huang, L., Chen, F., Shen, T., Huang, Y., et al",
    year: "2025",
    title: "Comprehensive nutritional, environmental, and economic assessment for 3,302 recipes in China",
    venue: "Scientific Data (Under review)"
  },
  {
    type: 'Journal Papers',
    authors: "Liu, C., Huang, Y., et al.",
    year: "2025",
    title: "Prospects for Large Models’ Applications on Stock Spatial Renewal Planning",
    venue: "Modern Urban Planning (In Chinese)"
  },
  {
    type: 'Journal Papers',
    authors: "Liu, C., Huang, Y., Liu Z., Wu Z.*",
    year: "2024",
    title: "Progress of Urban Informatics in Urban Planning Research, Education, and Practice",
    venue: "Urban Informatics",
    link: "https://doi.org/10.1007/s44212-025-00070-2"
  },
  {
    type: 'Journal Papers',
    authors: "Liu, C., Zhang, H., Huang, Y.",
    year: "2024",
    title: "Temporal and Spatial Dynamic Characteristics, Influencing Factors and Corresponding Planning Strategies of Carbon Emissions by Sectors in the Yangtze River Delta",
    venue: "Shanghai Urban Planning (In Chinese)"
  },
  {
    type: 'Journal Papers',
    authors: "Huang, Y., Liu, C.",
    year: "2023",
    title: "Prospective on Urban Informatics",
    venue: "International Urban Planning (Translator, in Chinese)",
    link: "https://doi.org/10.19830/j.upi.2023.678"
  },
  {
    type: 'Journal Papers',
    authors: "Wang, J. & Huang, Y., et al.",
    year: "2022",
    title: "Air Pollution Characteristics and Human Health Risk Assessment of Under-ground Parking Garages in Xi’an, China",
    venue: "Indoor and Built Environment",
    link: "https://doi.org/10.1177/1420326X221131951"
  },
  {
    type: 'Journal Papers',
    authors: "Zhang, L., Wang, J., Hu X., Zhou J., Zhao M., Zhang J., Bo Y., Huang, Y., Zhang Y.*",
    year: "2021",
    title: "VOCs and PM concentrations in underground parking garages of the commercial center and high-rise residential buildings",
    venue: "Air Quality, Atmosphere and Health",
    link: "https://doi.org/10.1007/s11869-021-01003-z"
  },
  // Conferences
  {
    type: 'Conference Papers',
    authors: "Huang, Y.",
    year: "2025",
    title: "Optimization of Idle Land Use Efficiency in Large Archaeological Site Areas",
    venue: "2025 China Urban Planning Annual Conference, Shenyang, China"
  },
  {
    type: 'Conference Papers',
    authors: "Huang, Y.",
    year: "2023",
    title: "The Activation of Large Archaeological Site Parks from the Perspective of Spatial Governance",
    venue: "2023 China Urban Planning Annual Conference, Wuhan, China"
  },
  {
    type: 'Conference Papers',
    authors: "Huang, Y., Zuo, W., Bai, M.",
    year: "2023",
    title: "Optimizing industrial structure in Guanzhong urban agglomeration under \"double carbon\" goals",
    venue: "2023 China Urban Planning Annual Conference, Wuhan, China"
  },
  // Presentations
  {
    type: 'Presentations',
    authors: "Huang, Y., Liu, C*.",
    year: "2025",
    title: "City-Scale Carbon Mitigation Plan Collaborating with LLM Multi-Agents",
    venue: "ACSP Conference 2025, Minnesota, MN (Oral presentation)"
  },
  {
    type: 'Presentations',
    authors: "Huang, Y., Wu, R., Chen, S., Liu, C*.",
    year: "2025",
    title: "Leveraging Large Language Models for Building Knowledge Graphs on City-Level Carbon Emission and Low-Carbon Policy",
    venue: "IACP Conference 2025, Xiamen, China (Oral presentation)"
  },
  {
    type: 'Presentations',
    authors: "Huang, Y., Liu, C*.",
    year: "2024",
    title: "Intra-urban Spatiotemporal Patterns of Greenhouse Gas Concentrations and Driving Land-Use Factors Identification",
    venue: "ACSP Conference 2024, Seattle, WA (Oral presentation)"
  },
  {
    type: 'Presentations',
    authors: "Li, G., Xiang, Z., Huang, Y., Liu C*",
    year: "2025",
    title: "Leveraging Large Language Models and Natural Language Processing to Assess Urban Comprehensive Planning Reforms in China",
    venue: "IACP Conference 2025, Xiamen, China"
  },
  {
    type: 'Presentations',
    authors: "Pan, L., Huang, Y., Liu C*",
    year: "2025",
    title: "Intra-urban Spatiotemporal Patterns of Greenhouse Gas Concentrations in Shanghai",
    venue: "AESOP Conference 2025, Istanbul, Turkey"
  },
  // Books
  {
    type: 'Book Chapters',
    authors: "Huang, Y.",
    year: "2025",
    title: "Low-Carbon-Oriented Territorial Spatial Planning System",
    venue: "In: Introduction of Low-Carbon Spatial Planning. Chemical Industry Press."
  },
  {
    type: 'Book Chapters',
    authors: "Huang, Y.",
    year: "2025",
    title: "Chapter 3. Spatial Planning and Spatial Form Design",
    venue: "Shanghai: Tongji University Press"
  },
  {
    type: 'Book Chapters',
    authors: "Huang, Y.",
    year: "Forthcoming",
    title: "Chapter 9: Digital Empowerment for Carbon-Neutral Urban Planning",
    venue: "In: Towards Carbon-Neutral Urban Planning"
  },
  // Reports
  {
    type: 'Reports & White Papers',
    authors: "Huang, Y. (Co-author)",
    year: "2025",
    title: "Blue book on applications of generative artificial intelligence in territorial spatial planning (2025)",
    venue: "Ministry of Natural Resources of China; Tongji University, etc."
  },
  {
    type: 'Reports & White Papers',
    authors: "Huang, Y. (Main researcher)",
    year: "2023–2025",
    title: "Sustainable dining-out report series (Reports 1–4)",
    venue: "Long Laboratory, The University of Tokyo"
  }
];

export const AWARDS: Award[] = [
  { title: "China National Scholarship Award for Master Students (Top 0.2%, ¥20,000)", year: "2024" },
  { title: "China National Scholarship Award for Bachelor Students (Top 0.2%, Total ¥24,000)", year: "2020, 2021, 2022" },
  { title: "Scholarship and Grant in Honor of Modern Chinese Scientists (Top 0.2%)", year: "2023" },
  { title: "Pacesetter Award: Star of Chang'an University (Top 0.16%)", year: "2023" },
  { title: "Outstanding Research Award: Star of Chang'an University (Top 0.16%)", year: "2023" },
  { title: "National Innovation and Entrepreneurship Training Program (Leader)", year: "2021" },
  { title: "Provincial Innovation and Entrepreneurship Training Program (Leader)", year: "2020" },
  { title: "WUPENiCity Urban Design Competition, Second Award (1/2)", year: "2022" },
  { title: "Mathematical Contest in Modeling, Honorable Award (1/3)", year: "2022" },
  { title: "WUPENiCity Sustainable Urban Research Report Competition, Medalist Award (1/5)", year: "2021" }
];

export const SERVICES: Experience[] = [
  {
    title: "Part-time Online Tutor for Chinese Overseas Students",
    organization: "Remote",
    duration: "Fall 2024 – Present",
    description: [
      "Provided academic tutoring for undergraduate students at overseas universities, including University of Toronto and Australian institutions, focusing on urban studies and data analysis."
    ]
  },
  {
    title: "IPAS Conference Support – Long Laboratory",
    organization: "The University of Tokyo",
    duration: "Fall 2025",
    description: [
      "Contributed to pre-event coordination and on-site photography for the International Planetary Actions for Sustainability (IPAS) conference."
    ]
  },
  {
    title: "Teaching Assistant – Sustainable Smart Urbanization",
    organization: "Tongji University",
    duration: "Spring 2024",
    description: [
      "Assisted in course delivery, grading, and student guidance for a graduate-level class for over 100 students."
    ]
  },
  {
    title: "AI for Cities – Conference Support",
    organization: "Tongji University",
    duration: "Summer 2024",
    description: [
      "Contributed to contacting, coordination, and on-site service for the conference."
    ]
  }
];

export const SKILLS = {
  programming: ["Python (pandas, PyTorch, NLP, APIs)", "ArcGIS", "MATLAB", "LaTeX", "Figma", "Illustrator"],
  languages: ["Mandarin (Native)", "English (TOEFL 103, R28, L28, S23, W24)", "Japanese (N1)", "Spanish (A1)"]
};

export const PHOTOGRAPHY_PROJECTS: PhotographyProject[] = [
  {
    id: 'p4',
    title: "Scenic China",
    description: "Exploring the natural beauty and landscapes of China, from the karst mountains of Guilin to the vibrant city of Kunming.",
    location: "China",
    year: "2024",
    images: [
      { src: import.meta.env.BASE_URL + "/Guilin, China.JPG", caption: "Karst mountains in Guilin" },
      { src: import.meta.env.BASE_URL + "/Kunming, China.JPG", caption: "Cityscape of Kunming" }
    ]
  },
  {
    id: 'p5',
    title: "Japan Landscapes",
    description: "Capturing the serene beauty of Japan's natural wonders and historical sites.",
    location: "Japan",
    year: "2024",
    images: [
      { src: import.meta.env.BASE_URL + "/Kamakura, Japan.JPG", caption: "Temples in Kamakura" },
      { src: import.meta.env.BASE_URL + "/Mt.Fuji, Japan.JPG", caption: "Mount Fuji at sunrise" }
    ]
  },
  {
    id: 'p6',
    title: "Southeast Asia",
    description: "A glimpse into the vibrant cultures and landscapes of Southeast Asia.",
    location: "Malaysia",
    year: "2024",
    images: [
      { src: import.meta.env.BASE_URL + "/Penang, Malaysia.JPG", caption: "Street food in Penang" }
    ]
  },
  {
    id: 'p7',
    title: "Pacific Northwest",
    description: "Urban and natural scenes from the Pacific Northwest region.",
    location: "Seattle, WA",
    year: "2024",
    images: [
      { src: import.meta.env.BASE_URL + "/Seattle, WA.JPG", caption: "Seattle skyline" },
      { src: import.meta.env.BASE_URL + "/Seattle, WA 2.JPG", caption: "Seattle waterfront" }
    ]
  },
  {
    id: 'p8',
    title: "Korean Cities",
    description: "Modern urban life and architecture in Seoul.",
    location: "Seoul, Korea",
    year: "2024",
    images: [
      { src: import.meta.env.BASE_URL + "/Seoul, Korea.JPG", caption: "Seoul cityscape" }
    ]
  },
  {
    id: 'p9',
    title: "Australian Landscapes",
    description: "Diverse landscapes and city views from Down Under.",
    location: "Sydney, Australia",
    year: "2024",
    images: [
      { src: import.meta.env.BASE_URL + "/Sydney, Australia.JPG", caption: "Sydney Opera House" },
      { src: import.meta.env.BASE_URL + "/Sydney, Australia 2.JPG", caption: "Sydney Harbour" },
      { src: import.meta.env.BASE_URL + "/Sydney, Australia 3.JPG", caption: "Sydney skyline" }
    ]
  }
];
