
import React, { useEffect, useState } from "react";

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const mathEquations = [
    "f(x) = ax² + bx + c",
    "∫ dx = x + C",
    "E = mc²",
    "π ≈ 3.14159",
    "∑(n=1 to ∞)",
    "dy/dx = lim",
    "sin²θ + cos²θ = 1",
    "∇ × F = μ₀J",
    "P(A|B) = P(B|A)P(A)/P(B)",
    "lim(x→∞) = L"
  ];

  const mathSymbols = ["∞", "∑", "∫", "∂", "√", "π", "α", "β", "γ", "Δ", "λ", "μ", "σ", "φ", "ψ", "Ω"];

  return (
    <div 
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, hsl(var(--secondary) / 0.1) 50%, hsl(var(--accent) / 0.05) 100%)`
      }}
    >
      {/* Mathematical grid pattern */}
      <div 
        className="absolute w-full h-full opacity-20 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.4 : 0.2,
          transform: `translate(${Math.sin(time * 0.5) * 10}px, ${Math.cos(time * 0.3) * 5}px)`
        }}
      >
        <div
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 30px),
              repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 30px),
              repeating-linear-gradient(45deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 0.5px, transparent 0.5px, transparent 60px)
            `,
          }}
          className="w-full h-full"
        />
      </div>
      
      {/* Floating mathematical equations */}
      {mathEquations.map((equation, i) => (
        <div
          key={i}
          className="absolute text-primary/30 font-mono text-sm transition-all duration-1000"
          style={{
            top: `${10 + (i * 8) + Math.sin(time * 0.2 + i) * 10}%`,
            left: `${5 + (i * 9) + Math.cos(time * 0.15 + i) * 8}%`,
            transform: `rotate(${Math.sin(time * 0.1 + i) * 5}deg) scale(${isHovered ? 1.2 : 1})`,
            opacity: 0.3 + Math.sin(time * 0.3 + i) * 0.2,
          }}
        >
          {equation}
        </div>
      ))}

      {/* Animated mathematical symbols */}
      {mathSymbols.map((symbol, i) => (
        <div
          key={i}
          className="absolute text-secondary/40 text-2xl font-bold transition-all duration-500"
          style={{
            top: `${20 + (i * 5) + Math.cos(time * 0.4 + i * 0.5) * 15}%`,
            right: `${10 + (i * 4) + Math.sin(time * 0.3 + i * 0.7) * 12}%`,
            transform: `rotate(${Math.cos(time * 0.2 + i) * 20}deg) scale(${1 + Math.sin(time * 0.5 + i) * 0.3})`,
            opacity: 0.2 + Math.cos(time * 0.4 + i) * 0.2,
          }}
        >
          {symbol}
        </div>
      ))}

      {/* Geometric calculation shapes */}
      <div 
        className="absolute w-32 h-32 border-2 border-primary/20 rounded-full transition-all duration-1000"
        style={{
          top: `${30 + Math.sin(time * 0.3) * 20}%`,
          left: `${20 + Math.cos(time * 0.2) * 15}%`,
          transform: `rotate(${time * 10}deg) scale(${isHovered ? 1.3 : 1})`,
          opacity: 0.3,
        }}
      />
      
      <div 
        className="absolute w-24 h-24 border border-secondary/30 transition-all duration-700"
        style={{
          top: `${60 + Math.cos(time * 0.4) * 25}%`,
          right: `${30 + Math.sin(time * 0.35) * 20}%`,
          transform: `rotate(${time * -15}deg) scale(${isHovered ? 1.4 : 1})`,
          opacity: 0.25,
        }}
      />

      <div 
        className="absolute w-40 h-40 border-2 border-accent/20 rounded-full transition-all duration-1200"
        style={{
          bottom: `${20 + Math.sin(time * 0.25) * 30}%`,
          left: `${40 + Math.cos(time * 0.3) * 25}%`,
          transform: `rotate(${time * 8}deg) scale(${isHovered ? 1.2 : 1})`,
          opacity: 0.2,
        }}
      />

      {/* Moving calculation particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-primary/50 rounded-full transition-all duration-300"
          style={{
            top: `${30 + (i * 8) + Math.sin(time * 0.6 + i) * 20}%`,
            left: `${50 + Math.cos(time * 0.5 + i * 0.8) * 30}%`,
            transform: `scale(${0.5 + Math.sin(time * 0.7 + i) * 0.5})`,
            opacity: 0.4 + Math.cos(time * 0.4 + i) * 0.3,
          }}
        />
      ))}

      {/* Interactive calculation cursor */}
      <div
        className="absolute w-12 h-12 border border-primary/30 rounded-full transition-all duration-200"
        style={{
          top: `${mousePosition.y}%`,
          left: `${mousePosition.x}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0.6 : 0,
        }}
      >
        <div className="absolute inset-2 border border-primary/50 rounded-full animate-ping" />
      </div>

      {/* Sine wave pattern */}
      <svg 
        className="absolute w-full h-full opacity-20"
        style={{
          transform: `translateX(${Math.sin(time * 0.2) * 50}px)`
        }}
      >
        <path
          d={`M 0 ${200 + Math.sin(time * 0.3) * 50} Q 200 ${150 + Math.cos(time * 0.2) * 30} 400 ${200 + Math.sin(time * 0.4) * 40} T 800 ${180 + Math.cos(time * 0.25) * 35}`}
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <path
          d={`M 0 ${300 + Math.cos(time * 0.35) * 40} Q 300 ${250 + Math.sin(time * 0.3) * 25} 600 ${300 + Math.cos(time * 0.2) * 45} T 1200 ${280 + Math.sin(time * 0.4) * 30}`}
          stroke="hsl(var(--secondary))"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
      </svg>
    </div>
  );
};

export default HeroBackground;
