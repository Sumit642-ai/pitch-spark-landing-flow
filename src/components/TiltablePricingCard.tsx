
import React, { useRef, useState } from 'react';
import PricingCard, { PricingCardProps } from '@/components/PricingCard';

const TiltablePricingCard = (props: PricingCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -25; // Tilt intensity
    const rotateY = ((x / width) - 0.5) * 25;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      transition: 'transform 0.6s ease-in-out',
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="will-change-transform"
    >
      <PricingCard {...props} />
    </div>
  );
};

export default TiltablePricingCard;
