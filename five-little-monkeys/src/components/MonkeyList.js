import { motion } from "framer-motion";

function MonkeySVG({ size = 72 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <g transform="translate(0,0)">
        <circle cx="50" cy="44" r="26" fill="#8B5E3C" />
        <circle cx="50" cy="58" r="18" fill="#F0CFA8" />
        <circle cx="40" cy="36" r="6" fill="#000" />
        <circle cx="60" cy="36" r="6" fill="#000" />
        <rect x="44" y="68" width="12" height="6" rx="3" fill="#5A3E2A" />
      </g>
    </svg>
  );
}

export default function MonkeyList({ count, fallingIndex }) {
  // fallingIndex: index of monkey that should animate falling (optional)
  return (
    <div className="monkey-row" role="list" aria-label="monkeys">
      {Array.from({ length: count }).map((_, i) => {
        const isFalling = i === fallingIndex;
        return (
          <motion.div
            key={i}
            role="listitem"
            initial={{ y: 0, rotate: 0, opacity: 1 }}
            animate={isFalling ? { y: 120, rotate: 20, opacity: 0 } : { y: [0, -10, 0] }}
            transition={isFalling ? { duration: 0.9, ease: "easeIn" } : { repeat: Infinity, duration: 1.1 }}
            style={{ width: 80 }}
          >
            <MonkeySVG size={80} />
          </motion.div>
        );
      })}
    </div>
  );
}
