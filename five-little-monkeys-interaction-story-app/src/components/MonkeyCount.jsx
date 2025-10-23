import { useStore } from "@nanostores/react";
import { monkeyCount } from "../stores/monkeyStore";

export default function MonkeyCounter() {
  const count = useStore(monkeyCount);
  return <p>Monkeys left: {count}</p>;
}
