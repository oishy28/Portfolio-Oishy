const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Artworks",
    link: "#artworks",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "", label: "Internship Completed" },
  { value: 1, suffix: "", label: "Mentorship Program" },
  { value: 5, suffix: "+", label: "Projects Built" }, // adjust based on your actual number
  { value: 3, suffix: "+", label: "Tech Stacks Learned" }, // adjust as needed
];




const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "UI UX Designer",
    modelPath: "/models/figma-optimized.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, -Math.PI / 6, 0],
  },
];

const expCards = [
  {
    review: "Oishy has been a hardworking member of our team at Eastern Bank PLC. Her contributions to our software development projects have been exceptional.",
    imgPath: "/images/eblexp.png",
    logoPath: "/images/ebl2.png",
    title: "Software Engineer Intern",
    date: "June 2024 - September 2024",
    responsibilities: [
  "Contributed to enterprise projects at Eastern Bank PLC using ASP.NET MVC, .NET Web API, and Oracle PL/SQL across applications like RMDICRR and DCFCL.",
  "Authored comprehensive user manuals, participated in UAT cycles, and adapted implementations based on client-driven requirements.",
  "Collaborated in agile cross-functional teams, leveraging tools like Swagger, IIS, SVN, and Visual Studio while enhancing critical thinking and debugging skills."
],

  },
    {
  review: "Received mentorship and hands-on training in tech and leadership.",
  imgPath: "/images/gplogo.png",
  logoPath: "/images/pngegg.png",
  title: "Platform SHE 5.0 Mentee",
  company: "Grameenphone",
  date: "July 2024 - March 2025",
  responsibilities: [
    "Engaged in structured mentorship under industry professionals from Grameenphone.",
    "Participated in technical workshops and leadership development sessions.",
    "Collaborated with peers on real-world tech challenges and problem-solving exercises.",
  ],

  },
  {
  review: "Actively involved in event management duties for Capture The Flag (CTF) competitions organized by IUTCS- ICT Fest.",
  imgPath: "/images/fest.png", // You can update this path with the actual image/logo
  logoPath: "/images/iut.png", // Replace with IUTCS logo path if you have one
  title: "Assistant Event Management Executive (CTF)",
  company: "IUT Computer Society (IUTCS)",
  date: "September 2023 - 2024",
  responsibilities: [
    "Planned and coordinated logistics for CTF (Capture The Flag) cybersecurity events.",
    "Worked closely with the core team to manage registration, scheduling, and on-day execution.",
    "Assisted in communications, team coordination, and post-event documentation for feedback and improvement.",
  ],
   },

];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/oishyfatema/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/oishy.akhand.2025/",
  },
  {
    name: "GitHub",
    imgPath: "/images/github-logo.png",
    url: "https://github.com/oishy28",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/oishy-fatema-akhand-5a6366280/",
  },
];



export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
