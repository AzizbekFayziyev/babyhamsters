import React from 'react';
import { motion } from 'framer-motion';

// Number formatting function
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const AnimatedNumber = ({ target, duration = 1 }) => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60); // Assuming 60 FPS
    const increment = (end - start) / totalFrames;

    const animateNumber = () => {
      start += increment;
      if (start < end) {
        setNumber(Math.ceil(start)); // Round up the number
        requestAnimationFrame(animateNumber);
      } else {
        setNumber(end); // Ensure we set the final number
      }
    };

    animateNumber();
  }, [target, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: 1 }} // Fade in
      transition={{ duration: 0.5 }} // Transition duration
      style={{ fontSize: '2rem', fontWeight: 'bold' }} // Style for the number
    >
      {formatNumber(number)} {/* Use the formatting function */}
    </motion.span>
  );
};

export default AnimatedNumber;
