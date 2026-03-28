import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../ui/Section.jsx";
import Modal from "../ui/Modal.jsx";
import { useLang } from "../../i18n.jsx";
import { usePortfolio } from "../../hooks/usePortfolio.js";

/**
 * PortfolioSection component renders the filtered project gallery.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function PortfolioSection() {
  const { t } = useLang();
  const { filteredItems, filter, setFilter, filters } = usePortfolio();
  const [modal, setModal] = useState(null);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black -z-10" />
      <Section
        id="portfolio"
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                filter === f
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}>
              {f}
            </button>
          ))}
        </div>

         <motion.div layout className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((it) => (
            <motion.div
              layout
              key={it.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden aspect-4/3 cursor-pointer shadow-2xl"
              onClick={() => setModal(it)}>
              <div
                className={`absolute inset-0 ${it.image} transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-all">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {it.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {it.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-mono bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      {it.metric}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Modal
          open={!!modal}
          onClose={() => setModal(null)}
          title={modal?.title}>
          <div className="space-y-6">
            <div
              className={`h-40 sm:h-48 rounded-2xl flex items-center justify-center ${modal?.image || "bg-linear-to-r from-slate-800 to-slate-900"}`}>
              <span className="text-white/20 font-bold text-xl">
                {modal?.title}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xs text-white/40 uppercase mb-1">
                  Impact
                </div>
                <div className="text-xl font-bold text-cyan-400">
                  {modal?.metric}
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-xs text-white/40 uppercase mb-1">
                  Category
                </div>
                <div className="text-xl font-bold text-white">
                  {modal?.category}
                </div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              {modal?.challenge ||
                "Este proyecto demuestra nuestra capacidad para entregar resultados tangibles."}
            </p>
            <Link
              to={`/project/${modal?.id}`}
              className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors cursor-pointer">
              Ver Caso de Estudio Completo <ExternalLink size={18} />
            </Link>
          </div>
        </Modal>
      </Section>
    </div>
  );
}
