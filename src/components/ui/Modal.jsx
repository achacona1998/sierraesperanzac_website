import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-80 bg-black/60 backdrop-blur flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}>
          <motion.div
            className="mx-4 max-w-lg w-full rounded-2xl bg-white/5 border border-white/10 shadow-xl p-4 sm:p-6 text-white"
            initial={{ scale: 0.96, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 10 }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{title}</h3>
              <button
                className="text-white/70 hover:text-white"
                onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="text-sm text-white/80">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
