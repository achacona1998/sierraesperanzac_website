import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../i18n.jsx";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Send,
  Code,
  Megaphone,
  Palette,
  HelpCircle,
} from "lucide-react";
import { createLead } from "../../lib/supabase.js";

export default function MultiStepForm({ initialService = "" }) {
  const { t } = useLang();
  // If initialService is provided, start at step 2
  const [step, setStep] = useState(initialService ? 2 : 1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    service: initialService,
    budget: "",
    timeline: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const updateData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const result = await createLead({
      name: formData.name,
      email: formData.email,
      message: formData.description,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
    });

    setLoading(false);
    if (!result.error) {
      setSuccess(true);
    } else {
      setError(result.error);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-md">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-green-400" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">
          {t.multistep.success_title}
        </h3>
        <p className="text-white/60 text-lg">{t.multistep.success_desc}</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col min-h-[400px] md:min-h-[500px]">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -z-10" />
        <div
          className={`absolute top-1/2 left-0 h-1 bg-cyan-400 -z-10 transition-all duration-500 ease-out`}
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? "bg-cyan-400 text-black scale-110" : "bg-gray-800 text-white/50 border border-white/10"}`}>
            {step > s ? <Check size={16} /> : s}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={step}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.multistep.step1_title}
            </h3>
            <p className="text-white/60 mb-8">{t.multistep.step1_subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {[
                { id: "web", icon: Code, label: t.multistep.fields.web },
                {
                  id: "marketing",
                  icon: Megaphone,
                  label: t.multistep.fields.marketing,
                },
                {
                  id: "design",
                  icon: Palette,
                  label: t.multistep.fields.design,
                },
                {
                  id: "other",
                  icon: HelpCircle,
                  label: t.multistep.fields.other,
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => updateData("service", opt.id)}
                  className={`p-6 rounded-2xl border text-left transition-all group ${formData.service === opt.id ? "bg-cyan-400/20 border-cyan-400" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
                  <opt.icon
                    className={`mb-4 ${formData.service === opt.id ? "text-cyan-300" : "text-white/50 group-hover:text-white"}`}
                    size={32}
                  />
                  <div
                    className={`font-bold ${formData.service === opt.id ? "text-cyan-300" : "text-white"}`}>
                    {opt.label}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1 flex flex-col space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.multistep.step2_title}
              </h3>
              <p className="text-white/60">{t.multistep.step2_subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  {t.multistep.fields.budget}
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateData("budget", e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                  <option value="" className="bg-gray-900">
                    Select...
                  </option>
                  <option value="<1k" className="bg-gray-900">
                    $500 - $1,000
                  </option>
                  <option value="1k-5k" className="bg-gray-900">
                    $1,000 - $5,000
                  </option>
                  <option value="5k-10k" className="bg-gray-900">
                    $5,000 - $10,000
                  </option>
                  <option value=">10k" className="bg-gray-900">
                    $10,000+
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  {t.multistep.fields.timeline}
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateData("timeline", e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                  <option value="" className="bg-gray-900">
                    Select...
                  </option>
                  <option value="ASAP" className="bg-gray-900">
                    ASAP
                  </option>
                  <option value="1month" className="bg-gray-900">
                    1 Month
                  </option>
                  <option value="3months" className="bg-gray-900">
                    1-3 Months
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-2 flex-1">
              <label className="text-sm text-white/70 ml-1">
                Project Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => updateData("description", e.target.value)}
                placeholder={t.multistep.fields.desc_placeholder}
                className="w-full h-full min-h-[120px] bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none"
              />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex-1 flex flex-col space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.multistep.step3_title}
              </h3>
              <p className="text-white/60">{t.multistep.step3_subtitle}</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  {t.multistep.fields.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateData("name", e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  {t.multistep.fields.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateData("email", e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  {t.multistep.fields.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateData("phone", e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-red-400 text-sm text-center">
            {t.multistep.error || "Error al enviar el formulario. Por favor, inténtalo de nuevo."}
          </p>
          <p className="text-red-300/60 text-xs text-center mt-1">
            {error}
          </p>
        </motion.div>
      )}

      {/* Actions */}
      <div className="mt-8 flex justify-between pt-6 border-t border-white/10">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <ChevronLeft size={18} /> {t.multistep.back}
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            onClick={nextStep}
            disabled={step === 1 && !formData.service}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
            {t.multistep.next} <ChevronRight size={18} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || loading}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-cyan-400 to-indigo-500 text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:scale-105 disabled:opacity-50">
            {loading ? "Sending..." : t.multistep.submit} <Send size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
