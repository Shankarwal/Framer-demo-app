import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const backdrop = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

const modal = {
  hidden: { y: "-100vh" },
  visible: {
    y: "20vh",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: 0.3,
      type: "spring",
      stiffness: 105,
      damping: 15,
    },
  },
};

const Modal = ({ showModal, setShowModal, setPizza }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
    setPizza({ base: "", toppings: [] });

    navigate("/", { replace: true });
  };

  return (
    <AnimatePresence mode="wait">
      {showModal ? (
        <motion.div
          className="brackdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <span className="close" onClick={handleClick}>
              ✖
            </span>
            <div className="greet">
              <h4>Thank You❤</h4>
              <p>We pledge to serve you the best</p>
              <span className="emoji">🎉</span>
              <button className="btn secondary again" onClick={handleClick}>
                Start again
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
