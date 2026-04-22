"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import {
  sectionFade,
  listContainer,
  listItem,
  accordionTransition,
  getChevronAnimation,
  chevronTransition,
  faqHover,
} from "@/lib/animations/Animations";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How does the Penpal program work?",
    answer:
      "The Penpal program connects individuals across different regions to exchange letters, ideas, and experiences. Once you sign up, you are matched with a partner based on your interests and preferences.",
  },
  {
    question: "Who can join the Penpal program?",
    answer:
      "Anyone can join the program regardless of age or location. It is designed to encourage communication, learning, and cultural exchange.",
  },
  {
    question: "Is the program free to use?",
    answer:
      "Yes, the program is completely free. However, participants may need to cover any personal costs related to sending letters or communication.",
  },
];

const FAQItemComponent = ({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <motion.div
      variants={listItem}
      {...faqHover}
      className="w-full border border-gray-200 bg-white shadow-[0_4px_4px_0_rgba(77,0,17,0.30)]"
    >
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between gap-3 px-5 md:px-6 py-4 md:py-5 text-left focus:outline-none rounded-xl"
      >
        <p className="text-[#4A0D0D] font-medium text-lg sm:text-xl md:text-2xl leading-snug">
          {item.question}
        </p>

        <motion.div
          animate={getChevronAnimation(isOpen)}
          transition={chevronTransition}
        >
          <FiChevronDown size={28} className="text-black" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={accordionTransition}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="faqs" className="w-full bg-[#F9FAFB] scroll-mt-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-20 md:py-28">
        <motion.h2
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-[40px] font-bold text-(--color-primary) mb-8 sm:mb-10"
        >
          FAQs
        </motion.h2>

        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3 sm:gap-4"
        >
          {faqs.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndexes.includes(index)}
              onToggle={() => toggle(index)}
              index={index}
            />
          ))}
        </motion.div>

        <motion.p
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-[#4C4B4B] mt-8 sm:mt-10 text-sm sm:text-base md:text-lg"
        >
          Have any other questions? Please contact us.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQSection;
