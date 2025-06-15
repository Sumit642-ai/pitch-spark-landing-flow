
import React, { useEffect, useState } from "react";

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, hsl(var(--secondary) / 0.1) 50%, hsl(var(--accent) / 0.05) 100%)`
      }}
    >
      {/* Animated grid pattern that responds to mouse */}
      <div 
        className="absolute w-full h-full opacity-30 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.5 : 0.3,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
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
      
      {/* Interactive floating shapes that follow mouse */}
      <div 
        className="absolute w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce transition-all duration-1000"
        style={{
          top: `${20 + mousePosition.y * 0.1}%`,
          left: `${10 + mousePosition.x * 0.05}%`,
          transform: `scale(${isHovered ? 1.2 : 1})`,
        }}
      />
      <div 
        className="absolute w-24 h-24 bg-secondary/30 rounded-full blur-lg animate-pulse transition-all duration-700"
        style={{
          top: `${40 - mousePosition.y * 0.08}%`,
          right: `${20 + mousePosition.x * 0.03}%`,
          transform: `scale(${isHovered ? 1.3 : 1})`,
        }}
      />
      <div 
        className="absolute w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-ping transition-all duration-1200"
        style={{
          bottom: `${32 + mousePosition.y * 0.06}%`,
          left: `${25 - mousePosition.x * 0.04}%`,
          transform: `scale(${isHovered ? 1.1 : 1})`,
        }}
      />

      {/* Additional interactive elements */}
      <div 
        className="absolute w-16 h-16 bg-primary/10 rounded-full blur-md animate-spin-slow transition-all duration-500"
        style={{
          top: `${60 + mousePosition.y * 0.03}%`,
          left: `${70 - mousePosition.x * 0.02}%`,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
      
      {/* Particle-like dots that move with mouse */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-pulse"
          style={{
            top: `${(i * 20 + 10) + Math.sin(mousePosition.x * 0.01 + i) * 5}%`,
            left: `${(i * 15 + 5) + Math.cos(mousePosition.y * 0.01 + i) * 3}%`,
            animationDelay: `${i * 0.2}s`,
            transform: `scale(${isHovered ? 1.5 : 1})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      {/* Glowing cursor follower */}
      <div
        className="absolute w-8 h-8 bg-primary/20 rounded-full blur-sm pointer-events-none transition-all duration-200"
        style={{
          top: `${mousePosition.y}%`,
          left: `${mousePosition.x}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0.8 : 0,
        }}
      />
    </div>
  );
};

export default HeroBackground;
