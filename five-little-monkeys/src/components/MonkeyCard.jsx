import React from "react";
import { motion, scale } from "framer-motion";
import { useMonkeyStore } from "../stores/monkeyStore";

export default function MonkeyCard({ number, index }) {
  const { decreaseMonkey } = useMonkeyStore();

  const handleFall = () => {
    decreaseMonkey();
  };

  return (
    <motion.div
      className="w-20 bg-yellow-200 rounded-full flex flex-col items-center justify-center
            shadow-lg text-3xl m-3 animate-jump cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ rotate: 20, y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      onClick={handleFall}
    >
      🐵
    </motion.div>
  );
}
