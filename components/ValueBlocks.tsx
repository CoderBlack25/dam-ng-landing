"use client";

import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { LuWorkflow, LuFolderOpen } from "react-icons/lu";

import {
  sectionFade,
  cardContainer,
  cardVariants,
  cardHover,
} from "@/lib/animations/Animations";

const ValueBlocks = () => {
  const valueData = [
    {
      id: 1,
      title: "Centralized Document Management",
      description:
        "All your files. All your memos. All your teams. One workspace designed for structure and clarity.",
      icon: <LuFolderOpen className="w-6 h-6 text-white" />,
    },
    {
      id: 2,
      title: "Workflow Automation That Actually Helps",
      description:
        "From document approvals to version tracking, DAM.ng removes bottlenecks and keeps everything moving.",
      icon: <LuWorkflow className="w-6 h-6 text-white" />,
    },
    {
      id: 3,
      title: "Team Collaboration Without the Chaos",
      description:
        "Share, comment, review, approve. Keep every team aligned without losing track of anything.",
      icon: <FiUsers className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="about" className="bg-white text-primary scroll-mt-10">
      <div className="max-w-7xl mx-auto py-20 md:py-28 px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight">
            What DAM.ng Does
          </h2>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {valueData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              {...cardHover}
              className="bg-white p-10 border border-(--color-border-light) shadow-sm flex flex-col items-start min-h-87.5"
            >
              <div className="w-12 h-12 bg-[linear-gradient(to_bottom,var(--color-primary-dark),var(--color-primary-light))] rounded flex items-center justify-center mb-8 shadow-md">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-5 leading-snug">
                {item.title}
              </h3>

              <p className="text-(--color-text-gray) text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueBlocks;
