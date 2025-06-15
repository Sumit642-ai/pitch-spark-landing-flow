
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
  options?: IntersectionObserverInit;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  className, 
  animationDelay, 
  options,
  onMouseEnter,
  onMouseLeave
}) => {
  const { ref, animationClass } = useScrollAnimation(options);

  return (
    <div 
      ref={ref} 
      className={`${className || ''} ${animationClass}`} 
      style={{ animationDelay }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
