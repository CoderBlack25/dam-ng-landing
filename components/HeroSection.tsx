"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/public/png/hero-image.png";
import frame from "@/public/png/ai-frame.png";
import { HiArrowRight } from "react-icons/hi";

import {
  containerVariants,
  fadeUp,
  imageVariants,
  floatingAnimation,
  floatingFrameAnimation,
  buttonMotion,
} from "@/lib/animations/Animations";

const HeroSection = () => {
  return (
    <section className="w-full bg-linear-to-r from-white via-(--color-bg-pink) to-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center px-6 sm:px-10 lg:px-14 pt-28 pb-18 md:pt-40 md:pb-30 lg:pt-50 lg:pb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-primary leading-[1.1] tracking-tight"
          >
            Work Smart.
            <br />
            Stay Organized.
            <br />
            Move Faster.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-(--color-text-gray) max-w-lg leading-relaxed"
          >
            DAM.ng brings your documents, memos, teams, and workflows into one
            clean, powerful workspace built for real company operations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div className="inline-flex" {...buttonMotion}>
              <Link
                href=""
                className="bg-primary text-white px-6 py-3 font-medium flex items-center gap-2 hover:bg-(--color-primary-darker) transition-all"
              >
                Get Started Free <HiArrowRight className="text-lg" />
              </Link>
            </motion.div>

            <motion.div className="inline-flex" {...buttonMotion}>
              <Link
                href=""
                className="border-2 border-primary text-primary px-6 py-3 font-medium hover:bg-(--color-bg-lighter) transition-all"
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  className="w-8 h-8 rounded-full bg-[linear-gradient(to_bottom,var(--color-primary-light),var(--color-primary-dark))] border-2 border-white"
                />
              ))}
            </div>
            <p className="text-(--color-text-lighter) text-sm">
              Trusted by teams across Nigeria
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div {...floatingAnimation}>
            <Image
              src={heroImage}
              alt=""
              className="w-auto"
              priority
              quality={75}
            />
          </motion.div>

          <motion.div
            className="absolute w-65 -bottom-10 -left-10"
            {...floatingFrameAnimation}
          >
            <Image src={frame} alt="" priority quality={75} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
