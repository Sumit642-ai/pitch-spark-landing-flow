
import React, { useState } from 'react';
import { Target, Zap, Users } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const AboutSection = () => {
  const [zoomedCard, setZoomedCard] = useState<number | null>(null);

  const uses = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Investor Presentations",
      description: "Create compelling pitch decks that capture investor attention and secure funding for your startup or business expansion."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Sales Pitches",
      description: "Transform your sales process with persuasive presentations that convert prospects into customers with professional design."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Team Alignment",
      description: "Keep your team aligned with clear, visually appealing presentations for meetings, strategy sessions, and company updates."
    }
  ];

  const handleCardClick = (index: number) => {
    setZoomedCard(prev => (prev === index ? null : index));
  };

  const closeZoom = () => {
    setZoomedCard(null);
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      {zoomedCard !== null && (
        <div
          className="fixed inset-0 bg-black/60 z-20"
          onClick={closeZoom}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Zth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses to tell their story through beautifully crafted presentations
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Company Logo Column */}
          <AnimateOnScroll animationDelay="200ms" className="lg:col-span-1">
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-3xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/4415eebf-5acd-45f9-9187-da6939d4dadd.png" 
                    alt="Zth Logo" 
                    className="h-16 w-16 mx-auto lg:mx-0 object-cover object-center rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl -z-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-2">Zth</h3>
              <p className="text-muted-foreground">Igniting Ideas Through Design</p>
            </div>
          </AnimateOnScroll>

          {/* Use Cases Columns */}
          {uses.map((use, index) => (
            <AnimateOnScroll 
              key={index}
              animationDelay={`${400 + index * 200}ms`}
              className="lg:col-span-1"
            >
              <div 
                className={`bg-card border rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${zoomedCard === index ? 'scale-125 z-30' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="text-center mb-4">
                  <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                    {use.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {use.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {use.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Additional Info */}
        <AnimateOnScroll animationDelay="1000ms" className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded by entrepreneurs for entrepreneurs, Zth combines cutting-edge AI technology 
              with beautiful design principles to help you create presentations that not only look stunning 
              but also effectively communicate your vision and drive results.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
