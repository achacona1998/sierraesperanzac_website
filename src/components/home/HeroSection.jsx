import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users } from "lucide-react";
import Typewriter from "../ui/Typewriter.jsx";
import HeroParticles from "../ui/HeroParticles.jsx";
import { useLang } from "../../i18n.jsx";
import { createLead } from "../../lib/supabase.js";
import heroBg from "../../assets/img/hero-bg.avif";
import heroMain from "../../assets/img/hero-main.avif";

/**
 * HeroSection component renders the main hero area with a lead capture form.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function HeroSection() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // Simple lead capture
      const result = await createLead({
        email: email,
        name: email,
        message: "Interesado en servicios de transformación digital",
      });

      if (result.error) {
        throw new Error(result.error);
      }

      setEmail("");
      setStatus("success");


    } catch (err) {
      console.error("Error creating lead:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay -z-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black -z-10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroParticles />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-4 flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-16 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-xs sm:text-sm mb-4 sm:mb-6 animate-pulse">
            🚀 {t.hero.badge || "Transformamos tu presencia digital"}
          </div>
          <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 md:mb-8 text-white">
            {t.hero.title}
          </h1>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-100/80 font-light mb-4 sm:mb-6 md:mb-8 h-10 sm:h-12 md:h-16">
            <Typewriter phrases={t.hero.subtitle_phrases} />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-lg mb-5 sm:mb-6 mx-auto lg:mx-0">
            {t.hero.description}
          </p>

          {/* Status Message */}
          {status === "success" && (
            <p className="mt-2 text-sm text-green-400 bg-green-500/20 px-3 py-2 rounded-full w-full max-w-md text-center">
              {t.hero.successMessage || "Email enviado correctamente"}
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-sm text-red-400 bg-red-500/20 px-3 py-2 rounded-full w-full max-w-md text-center">
              {t.hero.errorMessage ||
                "Error al enviar el email. Inténtalo de nuevo."}
            </p>
          )}

          {/* Integrated Hero Lead Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 p-2.5 sm:p-4 rounded-2xl sm:rounded-full flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto backdrop-blur-md sm:mx-0 mt-2">
            <input
              type="email"
              required
              placeholder={t.contact.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-3 sm:px-6 py-2 sm:py-3 text-white placeholder-white/40 focus:outline-none text-sm sm:text-base"
            />
            <button
              disabled={loading}
              className="px-5 sm:px-6 py-3 sm:py-3 rounded-xl sm:rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm sm:text-base transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-70 cursor-pointer whitespace-nowrap min-h-[44px]">
              {loading ? "..." : t.cta.talk}
            </button>
          </form>
          <p className="mt-2 text-xs text-white/40 flex items-center justify-center lg:justify-start gap-1">
            <CheckCircle size={10} className="text-green-400" />{" "}
            {t.hero.freeAudit || "Free Audit included"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block lg:hidden max-w-md mx-auto">
          <div className="absolute -inset-4 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-4xl blur-3xl opacity-20 animate-pulse" />

          <div className="relative animate-float">
            <img
              src={heroMain}
              alt="Digital Transformation"
              className="w-full h-auto drop-shadow-2xl relative z-10"
            />

            {/* Floating Stats - Smaller for tablet */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-6 -right-2 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-500/20 rounded-lg text-green-400">
                  <TrendingUp size={14} />
                </div>
                <div>
                  <div className="text-[10px] text-white/60">ROI</div>
                  <div className="text-sm font-bold text-white">+245%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-6 -left-2 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <Users size={14} />
                </div>
                <div>
                  <div className="text-[10px] text-white/60">Users</div>
                  <div className="text-sm font-bold text-white">50k+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop version with bigger stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-4xl blur-3xl opacity-20 animate-pulse" />

          <div className="relative animate-float">
            <img
              src={heroMain}
              alt="Digital Transformation"
              className="w-full h-auto drop-shadow-2xl relative z-10"
            />

            {/* Floating Stats */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 -right-4 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/60">ROI Increase</div>
                  <div className="text-xl font-bold text-white">+245%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 -left-4 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/60">Active Users</div>
                  <div className="text-xl font-bold text-white">50k+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
