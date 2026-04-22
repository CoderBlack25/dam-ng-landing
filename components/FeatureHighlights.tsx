"use client";

import { motion } from "framer-motion";
import { BsGrid } from "react-icons/bs";
import {
  LuSparkles,
  LuGitBranch,
  LuShield,
  LuChartColumn,
} from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";

import {
  sectionFade,
  cardContainer,
  cardVariants,
  cardHover,
  featureIconHover,
} from "@/lib/animations/Animations";

const featuresData = [
  {
    id: 1,
    title: "AI-Assisted Search",
    description:
      "Smart search that understands context, content, dates, and team activity.",
    icon: <LuSparkles className="w-6 h-6 text-(--color-icon-dark)" />,
  },
  {
    id: 2,
    title: "Document Version Control",
    description:
      "See changes, restore versions, and manage approvals with complete transparency.",
    icon: <LuGitBranch className="w-6 h-6 text-(--color-icon-dark)" />,
  },
  {
    id: 3,
    title: "Smart Memos System",
    description:
      "Create, track, categorize, and share memos with dynamic status badges.",
    icon: <CgFileDocument className="w-6 h-6 text-(--color-icon-dark)" />,
  },
  {
    id: 4,
    title: "Flexible Views",
    description:
      "Switch between grid view and list view depending on your workflow needs.",
    icon: <BsGrid className="w-6 h-6 text-(--color-icon-dark)" />,
  },
  {
    id: 5,
    title: "Access Controls",
    description:
      "Decide who can view, edit, approve, or manage documents with precision.",
    icon: <LuShield className="w-6 h-6 text-(--color-icon-dark)" />,
  },
  {
    id: 6,
    title: "Dashboard Overview",
    description:
      "Recent memos, files, tasks, and team activity at a glance in one unified view.",
    icon: <LuChartColumn className="w-6 h-6 text-(--color-icon-dark)" />,
  },
];

const FeatureHighlights = () => {
  return (
    <section className="bg-(--color-bg-cream) text-primary">
      <div className="max-w-7xl mx-auto py-20 md:py-28 px-6 sm:px-10 lg:px-14">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight mb-4">
            Powerful Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-(--color-text-gray) max-w-2xl mx-auto">
            Everything you need to manage documents and workflows efficiently
          </p>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              {...cardHover}
              className="bg-white p-8 border border-(--color-border-light) shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <motion.div
                {...featureIconHover}
                className="w-12 h-12 flex items-center justify-center rounded bg-[linear-gradient(to_bottom,var(--color-border-light),#FFFFFF)] border border-(--color-border-light-2) mb-6"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-(--color-text-gray) leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
