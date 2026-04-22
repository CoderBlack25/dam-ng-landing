"use client";

import { motion } from "framer-motion";
import { FiSearch, FiUsers } from "react-icons/fi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { LuFolderKanban } from "react-icons/lu";

import {
  sectionFade,
  stepsContainer,
  stepItem,
  iconPop,
} from "@/lib/animations/Animations";

const stepsData = [
  {
    number: "01",
    title: "Find Anything Instantly",
    description:
      "Search memos, files, team updates, and workflows in seconds with AI-powered intelligence.",
    icon: FiSearch,
  },
  {
    number: "02",
    title: "Work With Your Team Fluidly",
    description:
      "Shared spaces, file permissions, and approval flows that keep everyone in sync.",
    icon: FiUsers,
  },
  {
    number: "03",
    title: "Track Every Version Smoothly",
    description:
      "You always know what changed, when it changed, and who changed it.",
    icon: HiOutlineDocumentCheck,
  },
  {
    number: "04",
    title: "Manage Projects in One Place",
    description:
      "Create memos, upload documents, assign tasks, and organize reviews effortlessly.",
    icon: LuFolderKanban,
  },
];

export default function HowDamNgWorks() {
  return (
    <div className="bg-white text-primary">
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-20 md:py-28">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20 md:mb-28 max-w-lg mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold mb-6 tracking-tight">
            How DAM.ng Works
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-(--color-text-gray) leading-relaxed">
            Four simple steps to transform how your organization manages
            documents and workflows
          </p>
        </motion.div>

        <motion.div
          variants={stepsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-24"
        >
          {stepsData.map((step, index) => {
            const IconComponent = step.icon;

            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={index}
                custom={direction}
                variants={stepItem}
                whileHover={{ y: -6 }}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8"
              >
                <div className="relative shrink-0">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-(--color-border-light) border-2 border-white flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xs font-bold">{step.number}</span>
                  </div>

                  <motion.div
                    {...iconPop}
                    className="w-16 h-16 bg-[linear-gradient(to_bottom,var(--color-primary-dark),var(--color-primary-light))] rounded flex items-center justify-center shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl md:text-[22px] font-bold mb-2 md:mb-3">
                    {step.title}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-(--color-text-gray)">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
