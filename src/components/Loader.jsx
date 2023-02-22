import React from "react";
import { motion, useCycle } from "framer-motion";

const loader = {
  one: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        // ease: "easeInOut",
      },
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
  two: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("one", "two");

  return (
    <>
      <motion.div
        className="loader"
        variants={loader}
        // initial="hidden"
        animate={animation}
      ></motion.div>
      <button className="btn secondary" onClick={() => cycleAnimation()}>
        Cycle Loader
      </button>
    </>
  );
};

export default Loader;
