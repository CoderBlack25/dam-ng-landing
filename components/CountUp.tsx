"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { countUpTransition } from "@/lib/animations/Animations";

type CountUpProps = {
  from?: number;
  to: number;
  suffix?: string;
};

const CountUp = ({ from = 0, to, suffix = "" }: CountUpProps) => {
  const motionValue = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(motionValue, to, countUpTransition);

    const unsubscribe = motionValue.on("change", (latest) => {
      if (to % 1 !== 0) {
        setDisplay(parseFloat(latest.toFixed(1)));
      } else {
        setDisplay(Math.floor(latest));
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue, to]);

  return (
    <motion.span>
      {display}
      {suffix}
    </motion.span>
  );
};

export default CountUp;
