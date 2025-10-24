import React, { useState } from "react";
import MonkeyCard from "./MonkeyCard.jsx";

export default function MonkeyScene() {
  const [count, setCount] = useState(5);

  const removeMonkey = () => setCount((prev) => Math.max(prev - 1));
  const resetMonkeys = () => setCount(5);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-sky-200 to-blue-500 text-center p-6">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Five Little Monkeys Jumping on the Bed
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <MonkeyCard key={i} number={i + 1} onRemove={removeMonkey} />
        ))}
      </div>

      <p className="mt-6 text-white text-lg">
        {count > 0
          ? `${count} little monkeys jumping on the bed...`
          : "No more monkeys jumping on the bed!"}
      </p>

      <button
        className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
        onClick={resetMonkeys}
      >
        Restart Story
      </button>
    </div>
  );
}
