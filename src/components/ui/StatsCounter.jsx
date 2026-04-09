import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function StatsCounter({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 2,
  });

  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const normalizedValue =
    typeof value === "number" ? value.toString() : String(value);
  const isAnimatable = /^[0-9]+(\.[0-9]+)?(%|\+)?$/.test(
    normalizedValue.trim(),
  );

  useEffect(() => {
    if (isInView) {
      if (!isAnimatable) return;

      const numericValue = parseFloat(normalizedValue.replace(/[^0-9.]/g, ""));
      if (!isNaN(numericValue)) motionValue.set(numericValue);
    }
  }, [isInView, isAnimatable, motionValue, normalizedValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (!ref.current) return;
      if (!isAnimatable) return;

      if (normalizedValue.includes("%")) {
        ref.current.textContent = Math.floor(latest) + "%";
        return;
      }

      if (normalizedValue.includes("+")) {
        ref.current.textContent = Math.floor(latest) + "+";
        return;
      }

      ref.current.textContent = Math.floor(latest).toString();
    });
  }, [isAnimatable, normalizedValue, springValue]);

  useEffect(() => {
    if (!ref.current) return;
    if (isAnimatable) return;

    ref.current.textContent = normalizedValue;
  }, [isAnimatable, normalizedValue]);

  return (
    <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-br from-cyan-400 to-indigo-500 mb-2 group-hover:scale-110 transition-transform duration-300">
        <span ref={ref}>{isAnimatable ? "0" : normalizedValue}</span>
        {suffix}
      </div>
      <div className="text-sm md:text-base text-white/70 font-medium text-center">
        {label}
      </div>
    </div>
  );
}
