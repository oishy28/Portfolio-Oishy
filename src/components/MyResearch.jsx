// src/components/MyResearch.jsx
import React from 'react';

const MyResearch = () => {
  const paper = {
    title: 'From Chat to Checkup: Can Large Language Models Assist in Diabetes Prediction?',
    links: {
      arxiv: 'https://arxiv.org/abs/2506.14949',
      researchGate: 'https://www.researchgate.net/publication/392898712_From_Chat_to_Checkup_Can_Large_Language_Models_Assist_in_Diabetes_Prediction',
    },
  };

  return (
    <section className="bg-white text-black py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Research</h2>
      <div className="max-w-3xl mx-auto border border-black p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4">{paper.title}</h3>
        <div className="flex gap-4 flex-wrap mt-4">
          <a
            href={paper.links.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            View on arXiv
          </a>
          <a
            href={paper.links.researchGate}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            View on ResearchGate
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyResearch;
