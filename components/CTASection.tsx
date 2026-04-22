"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

import {
  ctaReveal,
  ctaButtonHover,
  arrowSlide,
} from "@/lib/animations/Animations";

const CTASection = () => {
  return (
    <section className="w-full bg-primary text-white">
      <motion.div
        variants={ctaReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center px-6 md:px-8 py-20 md:py-28"
      >
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Ready to Organize Your Organization?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-300 sm:text-base md:text-lg">
          Try DAM.ng today and transform how your teams work. Start with our
          free plan or book a personalized demo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div {...ctaButtonHover}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://dam-ng-client.vercel.app"
              className="flex items-center justify-center border-2 border-white gap-2 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
            >
              Get Started Free
              <motion.span {...arrowSlide}>
                <IoArrowForward />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div {...ctaButtonHover}>
            <Link
              href="mailto:support@damng.com"
              className="flex items-center justify-center border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary sm:px-8 sm:py-3.5 sm:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <p className="mt-8 text-xs text-neutral-400 sm:text-sm">
          Free 14-day trial • Cancel anytime
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
