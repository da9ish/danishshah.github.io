import React, { useState } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.5, yoyo: 1, ease: "easeInOut" };

const GitHub = () => {
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
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </motion.svg>
  )
}

export default GitHub
