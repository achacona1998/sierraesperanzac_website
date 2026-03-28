import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Section component renders a standardized section with a title and subtitle.
 * It handles the animation of the header elements when they come into view.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The unique identifier for the section.
 * @param {string} [props.title] - The main title of the section.
 * @param {string} [props.subtitle] - The subtitle or description of the section.
 * @param {React.ReactNode} props.children - The content of the section.
 * @param {string} [props.className] - Optional CSS class names.
 * @returns {JSX.Element} The rendered component.
 */
export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-16 text-center">
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-white tracking-tight"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <p className="text-xl text-cyan-100/60 max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            </motion.div>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
