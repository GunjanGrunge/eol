export function AnimatedHeroBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Floating gradient blobs */}
      <div
        className="absolute -left-32 top-10 h-[480px] w-[480px] rounded-full blur-3xl animate-blob-1"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.19 40 / 0.55) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute right-[-120px] top-32 h-[520px] w-[520px] rounded-full blur-3xl animate-blob-2"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.18 295 / 0.5) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute left-1/3 bottom-[-160px] h-[420px] w-[420px] rounded-full blur-3xl animate-blob-3"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.14 80 / 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Conic shimmer ring */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-2xl animate-spin-slow"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, oklch(0.7 0.19 40 / 0.4) 90deg, transparent 180deg, oklch(0.55 0.18 295 / 0.4) 270deg, transparent 360deg)",
        }}
      />

      {/* Drifting particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 73) % 100}%`,
            top: `${(i * 47) % 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${10 + (i % 5) * 2}s`,
          }}
        />
      ))}

      {/* Soft top/bottom fade so content reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
    </div>
  );
}
