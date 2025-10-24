import React from "react";
import { useMonkeyStore } from "../stores/monkeyStore.js";

export default function MonkeyScene() {
  const { monkeyCount, decreaseMonkey, resetMonkeys } = useMonkeyStore();

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">
        🐵 {monkeyCount} Little Monkeys Jumping on the Bed!
      </h1>

      <div className="space-x-4">
        <button
          onClick={decreaseMonkey}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          One Fell Off!
        </button>
        <button
          onClick={resetMonkeys}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Reset Monkeys
        </button>
      </div>
    </div>
  );
}
