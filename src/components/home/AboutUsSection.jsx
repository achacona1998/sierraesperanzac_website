import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Section from "../ui/Section.jsx";
import { useLang } from "../../i18n.jsx";
import aboutBg from "../../assets/img/about-bg.avif";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

/**
 * AboutUsSection component renders the company narrative and leadership team.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function AboutUsSection() {
  const { t } = useLang();

  return (
    <div className="relative">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20  mix-blend-luminosity opacity-30"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black -z-10" />

      <Section id="about" title={t.about.title} subtitle={t.about.subtitle}>
        <div className="space-y-16 relative z-10">
          {/* Company Narrative */}
          <div className="grid gap-6 sm:gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed font-light">
                {t.about.description}
              </p>
              <div className="bg-linear-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400 p-6 rounded-r-xl">
                <h4 className="text-cyan-400 font-bold mb-2 uppercase text-sm tracking-wider">
                  Vision
                </h4>
                <p className="text-white italic">
                  &quot;{t.about.vision}&quot;
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-4">
              {t.about.values.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">{val.title}</h5>
                    <p className="text-sm text-white/60">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              {t.about.leadership.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {t.about.leadership.founders.map((founder, idx) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-slate-700 to-slate-800 border border-white/20 flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:shadow-cyan-500/20 transition-all shrink-0">
                      {founder.name === "Adrian Castro Sierra" ? (
                        <img
                          src={founder.img}
                          alt={founder.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <img
                          src={founder.img}
                          alt={founder.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-3 justify-center">
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {founder.name}
                        </h4>
                        <p className="text-cyan-400 font-medium text-sm mb-3">
                          {founder.role}
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {founder.bio}
                        </p>
                      </div>
                      <div className="flex justify-start w-full items-center gap-4">
                        <a
                          className="hover:text-white transition-colors duration-300 text-gray-500"
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Linkedin />
                        </a>
                        <a
                          className="hover:text-white transition-colors duration-300 text-gray-500"
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Github />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
