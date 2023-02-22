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

const Toppings = ({ pizza, addTopping }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h4 className="tertiary-heading">step 2: choose toppings</h4>
      <ul className="list">
        {toppings.map((topping) => {
          let activeClass = pizza.toppings.includes(topping) ? "active" : "";

          return (
            <motion.li
              key={topping}
              className="list-item"
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.2,
                color: "#ffe066",
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 150, duration: 0.2 }}
            >
              <span className={activeClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      <Link to="/order">
        <motion.button
          className="btn secondary"
          variants={buttonVariants}
          whileHover="hover"
          disabled={pizza.toppings.length === 0}
        >
          order
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default Toppings;
