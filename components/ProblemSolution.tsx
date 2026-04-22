"use client";

import { motion } from "framer-motion";
import { HiCheck, HiX } from "react-icons/hi";

import {
  sectionFade,
  listContainer,
  listItem,
} from "@/lib/animations/Animations";

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
    <section className="bg-(--color-bg-cream) text-(--color-text-semi-dark)">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 py-20 md:py-28 px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Problem
          </h2>

          <p className="text-(--color-text-gray) mb-8 text-sm md:text-base">
            Traditional document management creates more chaos than clarity
          </p>

          <motion.div variants={listContainer} className="space-y-4">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                variants={listItem}
                whileHover={{ x: 6 }}
                className="flex items-center bg-neutral-50 border border-(--color-border-gray) p-5 shadow-sm"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-(--color-bg-very-light) flex items-center justify-center mr-4">
                  <HiX className="text-(--color-error) text-sm" />
                </div>

                <span className="text-(--color-text-semi-dark) font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The Solution
          </h2>

          <p className="text-(--color-text-gray) mb-8 text-sm md:text-base">
            DAM.ng brings order, intelligence, and speed to your operations
          </p>

          <motion.div variants={listContainer} className="space-y-4">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                variants={listItem}
                whileHover={{ x: 6 }}
                className="flex items-center bg-[linear-gradient(to_bottom,#FFFFFF,var(--color-border-light))] border border-(--color-border-light-2) p-5 shadow-sm"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[linear-gradient(to_bottom,var(--color-primary-dark),var(--color-primary-light))] flex items-center justify-center mr-4">
                  <HiCheck className="text-white text-sm" />
                </div>

                <span className="text-(--color-text-semi-dark) font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
