import React, { useState } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.5, yoyo: 1, ease: "easeInOut" };

const Twitter = () => {
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
        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </motion.svg>
  )
}

export default Twitter