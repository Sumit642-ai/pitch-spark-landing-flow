
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  let animationClass = '';
  if (isVisible) {
    animationClass = 'animate-fade-in-up';
  } else if (hasBeenVisible) {
    animationClass = 'animate-fade-out-down';
  } else {
    animationClass = 'opacity-0';
  }

  return { ref, animationClass };
};

