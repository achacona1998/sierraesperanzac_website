import MultiStepForm from "../ui/MultiStepForm.jsx";
import Section from "../ui/Section.jsx";
import { useLang } from "../../i18n.jsx";
import contactBg from "../../assets/img/contact-bg.avif";

/**
 * ContactSection component renders the multi-step contact form.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactSection() {
  const { t } = useLang();

  return (
    <div className="relative pb-32">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20  mix-blend-overlay"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black -z-10" />

      <Section
        id="contact"
        title={t.contact.title}
        subtitle={t.contact.subtitle}>
        <div className="max-w-4xl mx-auto">
          <MultiStepForm />
        </div>
      </Section>
    </div>
  );
}
