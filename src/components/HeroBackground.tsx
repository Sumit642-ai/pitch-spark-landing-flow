
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow">
        <div
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, hsl(var(--primary)/0.05), hsl(var(--primary)/0.05) 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, hsl(var(--primary)/0.05), hsl(var(--primary)/0.05) 1px, transparent 1px, transparent 40px)
            `,
          }}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
    </div>
  );
};

export default HeroBackground;
