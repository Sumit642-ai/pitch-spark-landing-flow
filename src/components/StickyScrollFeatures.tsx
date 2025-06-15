
import React, { useState, useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import { BrainCircuit, LayoutTemplate, Palette, BarChart3 } from 'lucide-react';

const featuresData = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "AI-Powered Content",
    description: "Generate persuasive content and talking points for every slide, tailored to your business."
  },
  {
    icon: <LayoutTemplate className="h-10 w-10 text-primary" />,
    title: "Beautiful Templates",
    description: "Choose from a library of professionally designed templates that impress investors."
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Easy Customization",
    description: "Effortlessly customize colors, fonts, and layouts to match your brand identity."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Analytics & Tracking",
    description: "Track who views your deck, which slides they engage with, and for how long."
  }
];

const StickyScrollFeatures = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (top > viewportHeight || top + height < 0) {
        return;
      }

      const scrollableHeight = height - viewportHeight;
      if (scrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      let newActiveCard = Math.floor(progress * featuresData.length);
      if (newActiveCard >= featuresData.length) {
        newActiveCard = featuresData.length - 1;
      }
      
      setActiveCardIndex(newActiveCard);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerHeight = `${featuresData.length * 80}vh`;

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto" style={{ height: containerHeight }}>
      <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title}
              className={`absolute inset-x-0 transition-opacity duration-300 ease-in-out ${
                index === activeCardIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollFeatures;
