'use client';
import { useEffect, useState } from 'react';

export default function CatchTheMonkey() {
  const [score, setScore] = useState(0);
  const [monkeyPos, setMonkeyPos] = useState({ top: '50%', left: '50%' });
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      const top = `${Math.random() * 80 + 10}%`;
      const left = `${Math.random() * 80 + 10}%`;
      setMonkeyPos({ top, left });
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleClick = () => {
    if (!gameOver) setScore((prev) => prev + 1);
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  };

  return (
    <div className="relative w-full h-screen bg-blue-200">
      <h1 className="text-3xl text-center font-bold mt-4">Catch the Monkey</h1>
      <p className="text-center mb-2">Score: {score} | Time Left: {timeLeft}s</p>

      {!gameOver ? (
        <img
          src="/images/monkey.png"
          alt="Monkey"
          className="absolute w-20 h-20 cursor-pointer transition-all duration-300"
          style={{
            top: monkeyPos.top,
            left: monkeyPos.left,
            transform: 'translate(-50%, -50%)',
          }}
          onClick={handleClick}
        />
      ) : (
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl font-bold mb-4">Game Over!</p>
          <p className="mb-2">Final Score: {score}</p>
          <button
            onClick={resetGame}
            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
