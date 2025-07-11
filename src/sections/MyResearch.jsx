import React from "react";
import { motion } from "framer-motion";

const papers = [
  {
    title: "From Chat to Checkup: Can Large Language Models Assist in Diabetes Prediction?",
    arxiv: "https://arxiv.org/abs/2506.14949",
    researchgate: "https://www.researchgate.net/publication/392898712_From_Chat_to_Checkup_Can_Large_Language_Models_Assist_in_Diabetes_Prediction",
  },
  // Future papers go here
  // {
  //   title: "Your Next Paper Title",
  //   arxiv: "https://arxiv.org/abs/XXXX.XXXXX",
  //   researchgate: "https://www.researchgate.net/publication/XXXXXXX",
  // },
];

const MyResearch = () => {
  return (
    <section
      id="research"
      className="section-padding flex flex-col items-center justify-center w-full px-5 md:px-20 mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl grid gap-6"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-md">
          My Research
        </h2>

        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl transform-gpu transition hover:scale-[1.02]"
            style={{ boxShadow: "0 30px 50px rgba(0, 0, 0, 0.3)" }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-4">
              {paper.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={paper.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                View on arXiv
              </a>
              <a
                href={paper.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                View on ResearchGate
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyResearch;
