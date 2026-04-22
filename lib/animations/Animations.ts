import { Variants, Transition } from "framer-motion";

// Parent container (stagger children)
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Fade + slide up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Image entrance
export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const floatingAnimation = {
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  } as Transition,
};

export const floatingFrameAnimation = {
  animate: { y: [0, -6, 0], x: [0, 4, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  } as Transition,
};

// Button interaction
export const buttonMotion = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.96 },
};

// Section header animation (slightly slower + smoother)
export const sectionFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Card container (stronger stagger for grid feel)
export const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Card entrance (scale + fade = SaaS feel)
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Card hover interaction (clean lift)
export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
  },
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 15,
  } as Transition,
};

// Staggered list container (lighter than card grid)
export const listContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// List item animation (slide + fade)
export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Timeline / steps container (similar to list but slightly slower)
export const stepsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

// Step item (alternating direction support)
export const stepItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (direction: "left" | "right") => ({
    opacity: 1,
    y: 0,
    x: direction === "left" ? -20 : 20,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Icon pop animation
const springTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 12,
};

export const iconPop = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
  },
  transition: springTransition,
};

// Subtle icon hover animation (SaaS polish)
const iconHoverTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 18,
};

export const featureIconHover = {
  whileHover: {
    scale: 1.1,
    rotate: 3,
  },
  transition: iconHoverTransition,
};

// Smooth count-up transition
export const countUpTransition: Transition = {
  duration: 1.2,
  ease: "easeOut",
};

// Stats container (slight delay after grid)
export const statsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

// Stats item (clean upward reveal)
export const statsItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Subtle pulse/glow for featured pricing card
const highlightTransition: Transition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
};

export const pricingHighlight = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(0,0,0,0)",
      "0 10px 30px rgba(0,0,0,0.08)",
      "0 0 0 rgba(0,0,0,0)",
    ],
  },
  transition: highlightTransition,
};

// Accordion expand/collapse
export const accordionTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

// Chevron rotation (smoother than default)
// Chevron rotation logic
export const getChevronAnimation = (isOpen: boolean) => ({
  rotate: isOpen ? 180 : 0,
});

// Chevron transition
export const chevronTransition: Transition = {
  duration: 0.25,
  ease: "easeOut",
};

// FAQ item hover (subtle SaaS feel)
export const faqHover = {
  whileHover: {
    y: -3,
  },
};

// CTA subtle entrance scale
export const ctaReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Button hover (stronger than normal cards)
export const ctaButtonHover = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.97,
  },
};

// Arrow slide animation
export const arrowSlide = {
  whileHover: {
    x: 4,
  },
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
  },
};
