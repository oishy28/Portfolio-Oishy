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


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
