import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * BentoCard component renders a card with a bento-grid style.
 * It features hover effects and entry animations.
 *
 * @param {Object} props - The component props.
 * @param {React.ElementType} [props.icon] - The icon component to display.
 * @param {string} props.title - The title of the card.
 * @param {React.ReactNode} props.children - The content of the card.
 * @param {string} [props.className] - Optional CSS class names.
 * @returns {JSX.Element} The rendered component.
 */
export default function BentoCard({ icon: Icon, title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px -10px rgba(34, 211, 238, 0.1)",
      }}
      className={`group rounded-3xl p-5 md:p-8 bg-white/5 border border-white/10 shadow-xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-2xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
          {Icon && <Icon className="text-cyan-400" size={28} />}
        </div>
        <h3 className="font-bold text-2xl text-white">{title}</h3>
      </div>
      <div className="text-white/70 text-lg leading-relaxed">{children}</div>
    </motion.div>
  );
}

BentoCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
