import { useEffect } from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <motion.section
      className="order-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h4 className="tertiary-heading order">Thank you for your order :)</h4>
      <motion.p className="final" variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div className="final" variants={childrenVariants}>
        {pizza.toppings.length > 0 ? (
          pizza.toppings.map((top, ind) => {
            return <p key={`${ind}${top}`}>{top}</p>;
          })
        ) : (
          <p>No Toppings</p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Order;
