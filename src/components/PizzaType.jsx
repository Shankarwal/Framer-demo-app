import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "spring" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 110,
    },
  },
  hover: {
    scale: 1.05,
    // textShadow: "0 0 2px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const PizzaType = ({ pizza, addBase }) => {
  const bases = ["classic", "thick & crispy", "thick crust"];
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h4 className="tertiary-heading">step 1: choose your base</h4>
      <ul className="list">
        {bases.map((base) => {
          let activeClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              className="list-item"
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.2,
                color: "#ffe066",
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 150, duration: 0.2 }}
            >
              <span className={activeClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.base ? (
        <Link to="/toppings">
          <motion.button
            className="btn secondary"
            variants={buttonVariants}
            whileHover="hover"
          >
            next
          </motion.button>
        </Link>
      ) : null}
    </motion.section>
  );
};

export default PizzaType;
