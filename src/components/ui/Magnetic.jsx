import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

const Magnetic = ({ children }) => {
  const ref = useRef();

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (width / 2 + left);
    const middleY = clientY - (height / 2 + top);
    mousePosition.x.set(middleX);
    mousePosition.y.set(middleY);
  };

  const reset = () => {
    mousePosition.x.set(0);
    mousePosition.y.set(0);
  };

  const { x, y } = mousePosition;

  return (
    <motion.div
      style={{ position: "relative", x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      ref={ref}>
        {children}
    </motion.div>
  );
};

export default Magnetic;
