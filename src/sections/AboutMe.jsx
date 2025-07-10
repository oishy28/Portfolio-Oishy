import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
  id="about"
  className="section-padding flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 w-full px-5 md:px-20 mb-20"
>
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-white-50 leading-relaxed">
          I'm Oishy Akhand, a passionate Fullstack Developer who blends clean code with creative UI/UX. I love building intuitive, responsive, and impactful digital experiences — whether it’s on the frontend, backend, or anything in between.
        </p>
        <p className="text-lg text-white-50 mt-4">
          With experience in React, Node.js, and design systems, I enjoy solving problems that sit at the intersection of logic and aesthetics.
        </p>
      </motion.div>

      {/* Image Section */}
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex justify-center -mt-6 md:-mt-12" // Moved image slightly up
      >
        <img
          src="../oishy.jpeg"
          alt="Oishy Akhand"
          className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm object-cover"
        />
      </motion.div>

    </section>
  );
};

export default AboutMe;
