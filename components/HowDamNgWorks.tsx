import React from "react";
import { FiSearch, FiUsers } from "react-icons/fi";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { LuFolderKanban } from "react-icons/lu";

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
    <div className="bg-white text-[#3F0909]">
      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="text-center mb-20 md:mb-28 max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold mb-6 tracking-tight">
            How DAM.ng Works
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4C4B4B] leading-relaxed">
            Four simple steps to transform how your organization manages
            documents and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-24">
          {stepsData.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8"
              >
                <div className="relative shrink-0">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F2E8E8] border-2 border-white flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xs font-bold">{step.number}</span>
                  </div>

                  <div className="w-16 h-16 bg-[linear-gradient(to_bottom,#3F0909,#841919)] rounded flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl md:text-[22px] font-bold mb-2 md:mb-3">
                    {step.title}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-[#4C4B4B]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
