export function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 animate-orb rounded-full blur-3xl"
          style={{ background: "var(--gradient-orb)" }}
        />
        <div
          className="absolute inset-[20%] animate-float rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.74 0.16 295) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
