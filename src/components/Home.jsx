import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const homeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 6px rgb(255,255,255)",
    transition: {
      // boxShadow: "0 0 8px rgb(255,255,255)",
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Shop</h2>
      <Link to="/pizza">
        <motion.button
          className="btn primary"
          variants={buttonVariants}
          whileHover="hover"
        >
          create your pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
