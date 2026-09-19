import { motion } from "framer-motion";

/**
 * Generative geometric panel used on dark hero sections in place of the
 * client's stock photography — keeps the "concrete + circuitry + ember"
 * visual language from the brand mockups without fabricating photo assets.
 */
export function AbstractPanel({
  variant = "flow",
  className = "",
}: {
  variant?: "flow" | "target" | "stairs" | "chat";
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #2a2e33 0%, #1a1c1f 45%, #232629 100%)",
        }}
      />
      {/* concrete-panel seams */}
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      <svg
        viewBox="0 0 600 450"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="380"
          cy="230"
          r="150"
          fill="none"
          stroke="#D96725"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <line
          x1="380"
          y1="40"
          x2="380"
          y2="420"
          stroke="#D96725"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <line
          x1="230"
          y1="230"
          x2="560"
          y2="230"
          stroke="#D96725"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        {variant === "flow" && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M40 ${170 + i * 22} C 200 ${170 + i * 22}, 260 230, 380 230`}
                fill="none"
                stroke="#F2F2F2"
                strokeOpacity={0.25 - i * 0.03}
                strokeWidth="2"
              />
            ))}
            <motion.circle
              cx="380"
              cy="230"
              r="10"
              fill="#D96725"
              animate={{ opacity: [0.6, 1, 0.6], r: [9, 12, 9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {variant === "target" && (
          <>
            <circle
              cx="380"
              cy="230"
              r="90"
              fill="none"
              stroke="#D96725"
              strokeOpacity="0.6"
              strokeWidth="1"
            />
            <circle
              cx="440"
              cy="150"
              r="60"
              fill="none"
              stroke="#D96725"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
            <line
              x1="290"
              y1="140"
              x2="470"
              y2="320"
              stroke="#D96725"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
            <motion.circle
              cx="380"
              cy="230"
              r="6"
              fill="#D96725"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {variant === "stairs" && (
          <>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={220 + i * 40}
                y={330 - i * 40}
                width="40"
                height="14"
                fill="#F2F2F2"
                opacity={0.1 + i * 0.02}
              />
            ))}
            <circle
              cx="400"
              cy="200"
              r="70"
              fill="none"
              stroke="#D96725"
              strokeOpacity="0.5"
              strokeWidth="1"
            />
          </>
        )}

        {variant === "chat" && (
          <>
            <rect x="300" y="150" width="130" height="90" rx="18" fill="#F2F2F2" opacity="0.12" />
            <rect x="360" y="200" width="140" height="95" rx="18" fill="#F2F2F2" opacity="0.18" />
            <motion.circle
              cx="410"
              cy="215"
              r="16"
              fill="#D96725"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </svg>

      {/* corner labels */}
      <div className="absolute left-6 top-6 space-y-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
        <p>Practical</p>
        <p>Technology</p>
        <p>Real impact</p>
      </div>
      <div className="absolute right-6 top-6 space-y-0.5 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
        <p>People</p>
        <p>Ideas</p>
        <p>Systems</p>
        <p>Progress</p>
      </div>
      <div className="absolute bottom-6 right-6 space-y-0.5 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
        <p>A clearer</p>
        <p>Tomorrow</p>
        <p>Builds today</p>
      </div>
    </div>
  );
}
