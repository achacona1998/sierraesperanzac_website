import { Code2, Megaphone, Rocket, CheckCircle } from "lucide-react";
import Section from "../ui/Section.jsx";
import BentoCard from "../ui/BentoCard.jsx";
import { useLang } from "../../i18n.jsx";
import serviceBg from "../../assets/img/service-bg.avif";

/**
 * ServicesSection component renders the services offered.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ServicesSection() {
  const { t } = useLang();

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none -z-10  mix-blend-overlay"
        style={{ backgroundImage: `url(${serviceBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black -z-10" />
      <Section
        id="services"
        title={t.services.title}
        subtitle={t.services.subtitle}>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoCard icon={Code2} title={t.services.web.title}>
            {t.services.web.description}
            <ul className="mt-6 space-y-3">
              {t.services.web.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-cyan-100/70">
                  <CheckCircle size={16} className="text-cyan-400 shrink-0" />{" "}
                  {b}
                </li>
              ))}
            </ul>
          </BentoCard>
          <BentoCard icon={Megaphone} title={t.services.marketing.title}>
            {t.services.marketing.description}
            <ul className="mt-6 space-y-3">
              {t.services.marketing.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-cyan-100/70">
                  <CheckCircle size={16} className="text-purple-400 shrink-0" />{" "}
                  {b}
                </li>
              ))}
            </ul>
          </BentoCard>
          <BentoCard icon={Rocket} title={t.services.growth.title}>
            {t.services.growth.description}
            <ul className="mt-6 space-y-3">
              {t.services.growth.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-cyan-100/70">
                  <CheckCircle size={16} className="text-orange-400 shrink-0" />{" "}
                  {b}
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </Section>
    </div>
  );
}
