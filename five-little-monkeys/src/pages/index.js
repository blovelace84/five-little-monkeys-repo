import { useEffect, useRef, useState } from "react";
import MonkeyList from "../components/MonkeyList";
import MonkeyVerse from "../components/MonkeyVerse";
import Controls from "../components/Controls";

export default function Home() {
  const [monkeys, setMonkeys] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fallingIndex, setFallingIndex] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // create audio if song exists in public/
    const audio = new Audio("/song.mp3");
    audioRef.current = audio;
    audio.loop = false;
    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("error", () => {
      // no audio available or failed to load
      audioRef.current = null;
    });

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const nextVerse = () => {
    if (monkeys <= 0) return;
    // pick the last visible monkey index to animate falling
    const idx = monkeys - 1;
    setFallingIndex(idx);
    setTimeout(() => {
      setMonkeys((m) => Math.max(0, m - 1));
      setFallingIndex(null);
    }, 900); // matches duration in MonkeyList for falling
  };

  const playPause = async () => {
    if (!audioRef.current) {
      setIsPlaying((p) => !p); // toggles UI only if audio absent
      return;
    }
    if (!isPlaying) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay policy may block play — user must click play
        console.warn("Audio play blocked:", err);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const restart = () => {
    setMonkeys(5);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  };

  // Auto-advance while audio plays (optional)
  useEffect(() => {
    if (!isPlaying || !audioRef.current) return;
    // If audio present and playing, schedule verses.
    // This is a naive auto-advance: one monkey every 5.5s while audio plays and monkeys > 0
    let timer;
    if (monkeys > 0) {
      timer = setTimeout(() => {
        nextVerse();
      }, 5500);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, monkeys]);

  const audioAvailable = Boolean(audioRef.current);

  return (
    <div className="container">
      <div className="card" role="main">
        <div className="header">
          <div className="title">🐵 Five Little Monkeys</div>
          <div className="small">Sing along — interactive nursery rhyme</div>
        </div>

        <MonkeyVerse monkeys={monkeys} />

        <MonkeyList count={monkeys} fallingIndex={fallingIndex} />

        <Controls
          onNext={nextVerse}
          onPlayPause={playPause}
          onRestart={restart}
          isPlaying={isPlaying}
          audioAvailable={audioAvailable}
        />
      </div>
    </div>
  );
}
