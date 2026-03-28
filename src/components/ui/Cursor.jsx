import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea, [role='button']")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY, visible]);

  return (
    <motion.div
      className="fixed left-0 top-0 pointer-events-none z-100 h-4 w-4 rounded-full bg-cyan-400/70 mix-blend-screen blur-[1px]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: visible ? 1 : 0,
      }}
      animate={{
        scale: hovered ? 2.5 : 1,
      }}
    />
  );
}
