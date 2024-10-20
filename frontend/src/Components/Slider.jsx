import { motion } from "framer-motion";

const Slider = ({ sliderControls, isOpen, children }) => {
  return (
    <>
      <motion.div
        variants={{
          initial: {
            y: "-100%",
          },
          dropDown: {
            y: "0px",
          },
        }}
        initial="initial"
        transition={{
          duration: 0.3,
        }}
        animate={sliderControls}
        className={`w-[95%] rounded-b-xl absolute z-50 ${
          isOpen && "shadow-md shadow-supporting"
        }`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Slider;
