import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/* Animated grid: higher opacity and a math-inspired accent color */}
      <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow">
        <div
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, hsla(var(--primary),0.18) 0px, hsla(var(--primary),0.18) 2px, transparent 2px, transparent 40px),
              repeating-linear-gradient(90deg, hsla(var(--primary),0.16) 0px, hsla(var(--primary),0.16) 2px, transparent 2px, transparent 40px)
            `,
          }}
          className="w-full h-full"
        />
      </div>
      {/* Overlay (keeps text readable), slightly more transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/70 to-background" />
    </div>
  );
};

export default HeroBackground;
