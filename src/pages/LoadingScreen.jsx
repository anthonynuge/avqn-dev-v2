import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen({ isLoading }) {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setVisible(false), 500); // Delay hiding after fade-out
    } else {
      setVisible(true);
    }
  }, [isLoading]);

  if (!visible) return null; // Prevents rendering when not needed

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#171717]/99 text-white z-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="text-neutral-200 text-xs">Loading...</h1>
    </motion.div>
  );
}

