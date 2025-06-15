
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
  options?: IntersectionObserverInit;
  exitAnimation?: 'up' | 'down';
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className, animationDelay, options, exitAnimation = 'down' }) => {
  const { ref, animationClass } = useScrollAnimation(options, exitAnimation);

  return (
    <div ref={ref} className={`${className || ''} ${animationClass}`} style={{ animationDelay }}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;

