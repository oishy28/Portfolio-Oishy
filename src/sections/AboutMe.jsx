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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/10 transform-gpu hover:scale-105 transition-all duration-700"
        style={{
          boxShadow: "0 40px 60px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-md">
          About Me
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-4 drop-shadow-sm">
          I'm <span className="text-white font-semibold">Oishy Akhand</span>, a
          passionate Fullstack Developer blending clean code with creative
          UI/UX. I love building impactful digital experiences — whether it’s
          frontend, backend, or both.
        </p>
        <p className="text-lg text-white/80 drop-shadow-sm">
          Experienced in <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">Node.js</span>, and modern
          design systems. I thrive on solving problems where logic meets
          aesthetics.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex justify-center -mt-6 md:-mt-12"
      >
        <div
          className="relative group"
          style={{ perspective: "1000px" }}
        >
          <img
            src="../oishy.jpeg"
            alt="Oishy Akhand"
            className="rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm object-cover transition duration-700 transform-gpu group-hover:scale-105 group-hover:-translate-y-2"
            style={{
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
            }}
          />
          {/* subtle glow overlay */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-white/20 transition-all duration-700" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
