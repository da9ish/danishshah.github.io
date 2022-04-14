import React, { useState } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.5, yoyo: 1, ease: "easeInOut" };

const Dribbble = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="feather feather-twitter"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTapEnd={() => setIsHovered(false)}
      onFocusStart={() => setIsHovered(true)}
      onFocusEnd={() => setIsHovered(false)}
    >
      <motion.path
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        initial={{ pathLength: 1 }}
        animate={{
          pathLength: isHovered ? 0 : 1
        }}
        transition={transition}
        d="M1 11C1 5.59395 5.59395 1 11 1C16.406 1 21 5.59395 21 11C21 16.406 16.406 21 11 21C5.59395 21 1 16.406 1 11Z"
      />
      <motion.path
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        initial={{ pathLength: 1 }}
        animate={{
          pathLength: isHovered ? 0 : 1
        }}
        transition={transition}
        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
    </motion.svg>
  )
}

export default Dribbble
