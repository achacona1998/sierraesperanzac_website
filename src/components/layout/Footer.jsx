export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-linear-to-r from-0% from-[#5eead4]/00 via-50% via-[#22d3ee]/00 to-100% to-[#818cf8]/00">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Sierra Esperanza Creations · All rights
        reserved
      </div>
    </footer>
  );
}
