import { useState } from "react";
// import { monkeyCount } from '../stores/monkeyStore';

export default function MonkeyCard({ id }) {
  const [fallen, setFallen] = useState(false);

  const handleClick = () => {
    if (!fallen) {
      setFallen(true);
      monkeyCount.set(monkeyCount.get() - 1);
    }
  };

  return (
    <div className={`monkey ${fallen ? "fall" : ""}`} onClick={handleClick}>
      🐵 Monkey {id}
    </div>
  );
}
