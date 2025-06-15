
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  priceDescription: string;
  features: string[];
  buttonText: string;
  isFeatured?: boolean;
  animationDelay?: string;
}

const PricingCard = ({ title, price, priceDescription, features, buttonText, isFeatured = false, animationDelay }: PricingCardProps) => {
  return (
    <Card 
      className={`flex flex-col h-full opacity-0 animate-fade-in-up ${isFeatured ? 'border-primary shadow-2xl shadow-primary/20 ring-2 ring-primary' : 'shadow-lg bg-card border border-white/10'}`}
      style={{ animationDelay }}
    >
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-baseline gap-1 mt-4">
          <span className="text-4xl font-extrabold tracking-tight">{price}</span>
          <span className="text-sm text-muted-foreground">{priceDescription}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button size="lg" className={`w-full ${isFeatured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;

