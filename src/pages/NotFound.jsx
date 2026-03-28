import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";

export default function NotFound() {
  const { t } = useLang();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-cyan-400 mb-4">404</h1>
        <p className="text-2xl text-white/80 mb-2">
          {t.lang_label === "EN" ? "Page not found" : "Página no encontrada"}
        </p>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          {t.lang_label === "EN"
            ? "The page you are looking for does not exist or has been moved."
            : "La página que buscas no existe o ha sido movida."}
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          {t.lang_label === "EN" ? "Back to Home" : "Volver al Inicio"}
        </Link>
      </div>
    </main>
  );
}
