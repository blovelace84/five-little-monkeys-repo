import React from "react";
import { useMonkeyStore } from "../stores/monkeyStore.js";
import MonkeyCard from "../components/MonkeyCard.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function MonkeyScene() {
  const { monkeyCount, resetMonkeys } = useMonkeyStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-blue-200 to-blue-400">
      <h1 className="text-4xl font-bold mb-8 text-yellow-50 drop-shadow-lg">
        🐵 {monkeyCount} Little Monkeys Jumping on the Bed!
      </h1>

      <motion.div
        layout
        className="flex flex-wrap justify-center w-full max-w-2xl"
        transition={{ layout: { duration: 0.5 } }}
      >
        <AnimatePresence>
          {Array.from({ length: monkeyCount }).map((_, i) => (
            <MonkeyCard key={i} number={monkeyCount - i} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
      <button
        onClick={resetMonkeys}
        className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        Reset Monkeys
      </button>
    </div>
  );
}
