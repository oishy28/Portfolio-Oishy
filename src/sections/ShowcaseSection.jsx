import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/resumetrics.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Resumetrics - Your Job Recruitment Companion
              </h2>
              <p className="text-white-50 md:text-xl">
                A job recruitment website with an integrated resume builder. Technologies Used: MERN Stack, Cloudinary for file handling.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img
                  src="/images/plasmaplus.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>PlasmaPlus - Blood donation platform</h2>
              <p className="text-white-50 md:text-xl">
                A web platform facilitating connections between blood donors and recipients. Technologies Used: HTML, CSS, JavaScript, PHP, MySQL.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img src="/images/educast.png" alt="YC Directory App" />
              </div>
              <h2>EduCast - Your Learning Companion</h2>
              <p className="text-white-50 md:text-xl">
                A platform connecting students with educational resources and tutors. Technologies Used: React, Node.js, Express, MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;