import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Calendar,
  User,
  Layers,
  Trophy,
  X,
} from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio.js";
import Section from "../components/ui/Section.jsx";
import MultiStepForm from "../components/ui/MultiStepForm.jsx";

export default function ProjectDetail() {
  const { id } = useParams();
  const { items } = usePortfolio();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Find project by ID
  const project = items.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found.
      </div>
    );
  }

  const mapCategoryToService = (cat) => {
    const c = cat.toLowerCase();
    if (c.includes("web") || c.includes("app")) return "web";
    if (c.includes("marketing") || c.includes("seo") || c.includes("ads"))
      return "marketing";
    if (c.includes("design") || c.includes("branding")) return "design";
    return "other";
  };

  return (
    <main className="relative min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className={`fixed inset-0 ${project.image} opacity-10 -z-20`} />
      <div className="fixed inset-0 bg-linear-to-b from-[#0b132b] via-[#0b132b]/90 to-black -z-10" />

      <div className="mx-auto max-w-5xl px-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors mb-8 group">
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Volver al Inicio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="flex items-center gap-2 text-white/60 text-sm">
              <Calendar size={14} /> {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            {project.challenge}
          </p>
        </motion.div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 text-cyan-400">
              <User size={20} className="sm:size-6" />
              <h3 className="font-bold text-white">Cliente</h3>
            </div>
            <p className="text-white/80">{project.client}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 text-purple-400">
              <Layers size={20} className="sm:size-6" />
              <h3 className="font-bold text-white">Servicios</h3>
            </div>
            <ul className="text-white/80 space-y-1">
              {project.services.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 text-green-400">
              <Trophy size={20} className="sm:size-6" />
              <h3 className="font-bold text-white">Impacto</h3>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">{project.metric}</p>
          </div>
        </div>

        {/* Deep Dive Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
          <Section
            id="challenge"
            title="El Desafío"
            className="!p-0 !text-left">
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              {project.challenge} El mercado actual exige velocidad y precisión,
              y nuestro cliente se enfrentaba a barreras tecnológicas que
              limitaban su crecimiento.
            </p>
          </Section>

          <Section
            id="solution"
            title="La Solución"
            className="!p-0 !text-left">
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              {project.solution} Implementamos un enfoque ágil centrado en el
              usuario, utilizando las últimas tecnologías para garantizar
              escalabilidad y rendimiento.
            </p>
          </Section>
        </div>

        {/* Results Showcase */}
        <div className="bg-linear-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Resultados Clave
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center">
                <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 mb-4">
                  <CheckCircle size={32} />
                </div>
                <p className="text-lg font-medium text-white">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="text-6xl text-cyan-500/20 font-serif mb-4"></div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6">
              {project.testimonial.text}
            </blockquote>
            <cite className="text-cyan-400 not-italic font-bold tracking-wide">
              — {project.testimonial.author}
            </cite>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            ¿Listo para resultados similares?
          </h3>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer">
            Iniciar Proyecto <ExternalLink size={20} />
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl relative my-auto"
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute -top-10 right-0 md:-top-12 md:-right-12 text-white/50 hover:text-white transition-colors p-2 z-10"
              >
                <X size={32} />
              </button>
              <MultiStepForm initialService={mapCategoryToService(project.category)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
