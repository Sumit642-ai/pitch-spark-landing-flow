
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/* Bold Animated Grid */}
      <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow">
        <div
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, hsla(var(--primary),0.38) 0px, hsla(var(--primary),0.38) 3px, transparent 3px, transparent 40px),
              repeating-linear-gradient(90deg, hsla(var(--primary),0.33) 0px, hsla(var(--primary),0.33) 3px, transparent 3px, transparent 40px)
            `,
          }}
          className="w-full h-full"
        />
      </div>
      {/* Math swirl waves, accent color, animated */}
      <svg
        className="absolute w-full h-full top-0 left-0 select-none animate-[swirl_18s_linear_infinite]"
        width="100%"
        height="100%"
        viewBox="0 0 1920 800"
        fill="none"
        style={{
          opacity: 0.28,
          filter: "blur(1.2px)",
          zIndex: 0,
        }}
      >
        <defs>
          <linearGradient id="swirl" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary)/0.4)" />
          </linearGradient>
        </defs>
        <path
          d="M 0 230 Q 420 360 960 230 T 1920 230"
          stroke="url(#swirl)"
          strokeWidth="9"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M 0 230 Q 420 360 960 230 T 1920 230;
              M 0 250 Q 420 160 960 400 T 1920 210;
              M 0 210 Q 520 360 960 220 T 1920 270;
              M 0 230 Q 420 360 960 230 T 1920 230
            "
          />
        </path>
        <path
          d="M 0 750 Q 660 690 960 710 T 1920 780"
          stroke="url(#swirl)"
          strokeWidth="7"
          strokeDasharray="10 16"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M 0 750 Q 660 690 960 710 T 1920 780;
              M 0 740 Q 600 780 960 650 T 1920 790;
              M 0 800 Q 960 790 1920 780 T 1920 790;
              M 0 750 Q 660 690 960 710 T 1920 780
            "
          />
        </path>
      </svg>
      {/* Much lighter overlay, so background remains visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90 pointer-events-none" />
    </div>
  );
};

export default HeroBackground;

