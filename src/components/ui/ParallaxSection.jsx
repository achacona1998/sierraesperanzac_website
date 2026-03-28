import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

/**
 * ParallaxSection component creates a parallax scrolling effect for its children.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered with parallax effect.
 * @param {string} [props.className] - Optional CSS class names.
 * @returns {JSX.Element} The rendered component.
 */
export default function ParallaxSection({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`relative ${className}`}>
      <motion.div style={{ y }} className="h-full">
        {children}
      </motion.div>
    </motion.div>
  );
}

ParallaxSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
