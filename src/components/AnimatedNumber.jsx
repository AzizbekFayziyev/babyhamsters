import React from 'react';
import { motion } from 'framer-motion';

// Number formatting function
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const AnimatedNumber = ({ target, duration = 1 }) => {
  const [number, setNumber] = React.useState(0);
  const [prevTarget, setPrevTarget] = React.useState(target);

  React.useEffect(() => {
    // Function to handle the animation logic
    const animateNumber = (start, end) => {
      const totalFrames = Math.round(duration * 60); // Assuming 60 FPS
      const increment = (end - start) / totalFrames;

      const animate = () => {
        start += increment;
        if (start < end) {
          setNumber(Math.ceil(start)); // Round up the number
          requestAnimationFrame(animate);
        } else {
          setNumber(end); // Ensure we set the final number
        }
      };

      animate();
    };

    if (target !== prevTarget) {
      // Animate from the last displayed number to the new target
      animateNumber(number, target);
      setPrevTarget(target); // Update the previous target
    } else if (number === 0) {
      // Animate from 0 to the initial target if it's the first render
      animateNumber(0, target);
    }

    // Set number to 0 if target changes to a lower number
    if (target < prevTarget) {
      setNumber(0);
    }

  }, [target, duration, number, prevTarget]);

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
