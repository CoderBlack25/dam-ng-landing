import React from "react";
import { HiCheck, HiX } from "react-icons/hi";

const ProblemSolution = () => {
  const problems = [
    "Lost files scattered everywhere",
    "Unclear memo status updates",
    "Teams waiting on approvals",
    "Documents across WhatsApp, email, drives",
  ];

  const solutions = [
    "Structured storage system",
    "Powerful AI-assisted search",
    "Real-time collaboration tools",
    "Automated tracking & audit trails",
  ];

  return (
    <section className="bg-[#FAF8F7] text-[#272626]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 py-24 px-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F0909] mb-4">
            The Problem
          </h2>
          <p className="text-[#4C4B4B] mb-8 text-sm md-text-base">
            Traditional document management creates more chaos than clarity
          </p>

          <div className="space-y-4">
            {problems.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-neutral-50 border border-[#E6D5D5] p-5 shadow-sm transition-transform hover:translate-x-1"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#FEF2F2] flex items-center justify-center mr-4">
                  <HiX className="text-[#DC2626] text-sm" />
                </div>
                <span className="text-[#272626] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F0909] mb-4">
            The Solution
          </h2>
          <p className="text-[#4C4B4B] mb-8 text-sm md-text-base">
            DAM.ng brings order, intelligence, and speed to your operations
          </p>

          <div className="space-y-4">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[linear-gradient(to_bottom,#FFFFFF,#F2E8E8)] border border-[#D5B6B6] p-5 shadow-sm transition-transform hover:translate-x-1"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[linear-gradient(to_bottom,#3F0909,#841919)] flex items-center justify-center mr-4">
                  <HiCheck className="text-white text-sm" />
                </div>
                <span className="text-[#272626] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
