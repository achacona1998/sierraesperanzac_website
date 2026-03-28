export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Glowing Orbs */}
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse"></div>
      <div className="absolute right-[10%] bottom-[20%] h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] animate-pulse delay-700"></div>
    </div>
  );
}
