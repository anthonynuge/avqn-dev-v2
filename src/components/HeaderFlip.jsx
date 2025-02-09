import { motion } from "framer-motion";

const DURATION = 0.15;
const STAGGER = 0.025;

const HeaderFlip = ({ children, className }) => {
  if (!children) return;

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap font-black uppercase ${className}`}
    >
      <div>
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              key={index}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block"
              key={index}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeaderFlip;
