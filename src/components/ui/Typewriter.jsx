import { useEffect, useState } from "react";

export default function Typewriter({ phrases, speed = 40, pause = 1200 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timer;

    if (!deleting && text === current) {
      // Pause at end of word
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // Move to next word
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, speed);
    } else {
      // Typing or deleting
      timer = setTimeout(
        () => {
          const next = deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? speed / 2 : speed,
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, speed, pause]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-white/80">{text}</span>
      <span className="ml-1 h-6 w-[2px] bg-cyan-400 animate-pulse" />
    </span>
  );
}
