import React from "react";
import { BsGrid } from "react-icons/bs";
import {
  LuSparkles,
  LuGitBranch,
  LuShield,
  LuChartColumn,
} from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";

const featuresData = [
  {
    id: 1,
    title: "AI-Assisted Search",
    description:
      "Smart search that understands context, content, dates, and team activity.",
    icon: <LuSparkles className="w-6 h-6 text-[#4A1D24]" />,
  },
  {
    id: 2,
    title: "Document Version Control",
    description:
      "See changes, restore versions, and manage approvals with complete transparency.",
    icon: <LuGitBranch className="w-6 h-6 text-[#4A1D24]" />,
  },
  {
    id: 3,
    title: "Smart Memos System",
    description:
      "Create, track, categorize, and share memos with dynamic status badges.",
    icon: <CgFileDocument className="w-6 h-6 text-[#4A1D24]" />,
  },
  {
    id: 4,
    title: "Flexible Views",
    description:
      "Switch between grid view and list view depending on your workflow needs.",
    icon: <BsGrid className="w-6 h-6 text-[#4A1D24]" />,
  },
  {
    id: 5,
    title: "Access Controls",
    description:
      "Decide who can view, edit, approve, or manage documents with precision.",
    icon: <LuShield className="w-6 h-6 text-[#4A1D24]" />,
  },
  {
    id: 6,
    title: "Dashboard Overview",
    description:
      "Recent memos, files, tasks, and team activity at a glance in one unified view.",
    icon: <LuChartColumn className="w-6 h-6 text-[#4A1D24]" />,
  },
];

const FeatureHighlights = () => {
  return (
    <section className="bg-[#FAF8F7] text-[#3F0909]">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight mb-4">
            Powerful Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4C4B4B] max-w-2xl mx-auto">
            Everything you need to manage documents and workflows efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 border border-[#F2E8E8] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded bg-[linear-gradient(to_bottom,#F2E8E8,#FFFFFF)] border border-[#D5B6B6] mb-6">
                {feature.icon}
              </div>

              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-[#4C4B4B] leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
