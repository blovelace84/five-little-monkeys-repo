import { useState } from "react";
import "./Monkey.css";

export default function Monkey({ id, onFall }) {
  const [fallen, setFallen] = useState(false);

  const handleClick = () => {
    setFallen(true);
    onFall(id);
  };
  return (
    <div className={`monkey ${fallen ? "fall" : ""}`} onClick={handleClick}>
      🐵
    </div>
  );
}
