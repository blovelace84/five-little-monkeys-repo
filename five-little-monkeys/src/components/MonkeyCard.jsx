import React from "react";

export default function MonkeyCard({ number, onRemove }) {
  return (
    <div className="p-4 bg-yellow-100 rounded-2xl shadow-md text-center hover:scale-105 transition-transform">
      <h2 className="text-xl font-bold mb-2">🐵 Monkey #{number}</h2>
      <p className="text-gray-700">Jumping on the Bed!</p>
      <button
        className="mt-3 bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition-colors"
        onClick={onRemove}
      >
        One Fell Off!
      </button>
    </div>
  );
}
