import { motion } from "framer-motion";

const svgs = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const paths = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header className="header">
      <motion.svg
        className="pizza-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        variants={svgs}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          fill="none"
          d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          variants={paths}
        />
        <motion.path
          fill="none"
          d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          variants={paths}
        />
      </motion.svg>
      <motion.h3
        className="logo-text"
        initial={{ y: -240 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
      >
        Pizza
      </motion.h3>
    </header>
  );
};

export default Header;
