import { motion } from "framer-motion";
import StatsCounter from "../ui/StatsCounter.jsx";
import { useLang } from "../../i18n.jsx";
import Section from "../ui/Section.jsx";
import { ShieldCheck, Zap, TrendingUp, Clock } from "lucide-react";
import whyUsBg from "../../assets/img/why-us-bg.avif";

/**
 * WhyUsSection component renders the statistics/reasons to choose the company.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function WhyUsSection() {
  const { t } = useLang();

  const icons = [ShieldCheck, Zap, TrendingUp, Clock];

  return (
    <div id="why-us" className="relative bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center  mix-blend-screen opacity-20"
        style={{ backgroundImage: `url(${whyUsBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />

       <Section
         title={t.why_us.title}
         subtitle={t.why_us.subtitle}
         className="relative z-10">
          <div className="grid gap-6 sm:gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Left Column: Key Benefits */}
            <div className="space-y-5 sm:space-y-8">
              {t.why_us.items.map((item, idx) => {
                const Icon = icons[idx] || ShieldCheck;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all shrink-0">
                      <Icon size={20} className="sm:size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {t.why_us.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/20 transition-all text-center flex flex-col justify-center">
                <StatsCounter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
