
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
      {/* Animated grid pattern */}
      <div className="absolute w-full h-full opacity-30">
        <div
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 40px)
            `,
          }}
          className="w-full h-full animate-pulse"
        />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-ping"></div>
    </div>
  );
};

export default HeroBackground;
