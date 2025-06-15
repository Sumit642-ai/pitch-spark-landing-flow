
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const CreativeCTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  const floatingIcons = [
    { Icon: Sparkles, x: 10, y: 20 },
    { Icon: Zap, x: 85, y: 30 },
    { Icon: Target, x: 15, y: 75 },
    { Icon: Sparkles, x: 90, y: 80 },
  ];

  return (
    <section className="relative bg-background py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--primary)) 0deg, 
            hsl(var(--secondary)) 90deg, 
            hsl(var(--accent)) 180deg, 
            hsl(var(--primary)) 270deg, 
            hsl(var(--primary)) 360deg)`,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y }, index) => (
        <div
          key={index}
          className="absolute text-primary/20 animate-pulse"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <Icon size={32} />
        </div>
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll 
          className="text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`relative bg-gradient-to-br from-card via-card/90 to-card/80 rounded-3xl p-12 border-2 shadow-2xl transition-all duration-500 ${
              isHovered ? 'shadow-primary/30 border-primary/50 scale-105' : 'shadow-xl border-border'
            }`}
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--card)) 0%, 
                hsl(var(--card) / 0.95) 50%, 
                hsl(var(--card) / 0.9) 100%)`,
              boxShadow: isHovered 
                ? `0 25px 50px -12px hsl(var(--primary) / 0.25), 0 0 0 1px hsl(var(--primary) / 0.1)` 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Animated border gradient */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-50 animate-spin-slow"
              style={{
                background: `conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent)`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                padding: '2px',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Sparkles className={`h-16 w-16 text-primary transition-all duration-300 ${isHovered ? 'animate-spin' : ''}`} />
                  <div className="absolute inset-0 h-16 w-16 bg-primary/20 rounded-full blur-md animate-pulse" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready to build your{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                  winning pitch?
                </span>
              </h2>
              
              <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of startups and founders who trust PitchSpark to create stunning presentations.
              </p>
              
              <div className="relative inline-block">
                <Button 
                  size="lg" 
                  className={`relative bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/30 font-bold py-4 px-12 text-xl rounded-full transition-all duration-300 ${
                    isHovered ? 'scale-110 shadow-primary/50' : ''
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    Sign Up Now 
                    <ArrowRight className={`ml-3 h-6 w-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                  </span>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-md animate-pulse" />
                </Button>
                
                {/* Button sparkle effects */}
                {isHovered && (
                  <>
                    <div className="absolute -top-2 -right-2 text-yellow-400 animate-ping">
                      <Sparkles size={16} />
                    </div>
                    <div className="absolute -bottom-2 -left-2 text-yellow-400 animate-ping" style={{ animationDelay: '0.5s' }}>
                      <Sparkles size={12} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CreativeCTASection;
