"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { RiScales3Line } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { RxPeople } from "react-icons/rx";
import { LuFolderKanban } from "react-icons/lu";
import { IoCodeOutline } from "react-icons/io5";
import CountUp from "@/components/CountUp";

import {
  sectionFade,
  cardContainer,
  cardVariants,
  cardHover,
  featureIconHover,
  statsContainer,
  statsItem,
} from "@/lib/animations/Animations";

const BuiltForTeams = () => {
  const features = [
    { name: "HR", icon: FiBriefcase },
    { name: "Legal", icon: RiScales3Line },
    { name: "Operations", icon: GoGear },
    { name: "Admin", icon: RxPeople },
    { name: "Engineering", icon: IoCodeOutline },
    { name: "Projects", icon: LuFolderKanban },
  ];

  return (
    <section className="w-full bg-white text-primary">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-20 md:py-28 text-center">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[40px]">
            Built for Teams
          </h2>

          <p className="mt-3 text-base text-(--color-text-gray) sm:text-lg md:text-xl">
            A Workspace That Adapts to Your People
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-(--color-text-lighter) sm:text-base">
            DAM.ng supports departments with different needs, while keeping
            everything centralized.
          </p>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                {...cardHover}
                className="flex flex-col items-center justify-center gap-3 bg-[linear-gradient(to_bottom,#FFFFFF,var(--color-bg-cream))] border border-(--color-border-light) p-6 transition hover:shadow-sm"
              >
                <motion.div
                  {...featureIconHover}
                  className="flex h-12 w-12 items-center justify-center rounded bg-[linear-gradient(to_bottom,var(--color-border-light),#FFFFFF)] border border-(--color-border-light-2) text-primary"
                >
                  <Icon size={20} />
                </motion.div>

                <p className="text-sm font-semibold text-(--color-text-semi-dark)">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <motion.div variants={statsItem}>
            <p className="text-4xl font-bold sm:text-5xl">
              <CountUp to={50} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-medium text-[#828181] sm:text-base">
              Organizations
            </p>
          </motion.div>

          <motion.div variants={statsItem}>
            <p className="text-4xl font-bold sm:text-5xl">
              <CountUp to={100} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-medium text-[#828181] sm:text-base">
              Active Users
            </p>
          </motion.div>

          <motion.div variants={statsItem}>
            <p className="text-4xl font-bold sm:text-5xl">
              <CountUp to={99.9} suffix="%" />
            </p>
            <p className="mt-2 text-sm font-medium text-[#828181] sm:text-base">
              Uptime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForTeams;
