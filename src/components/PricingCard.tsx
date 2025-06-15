
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
}

const PricingCard = ({ title, price, priceDescription, features, buttonText, isFeatured = false }: PricingCardProps) => {
  return (
    <Card className={`flex flex-col ${isFeatured ? 'border-blue-600 shadow-xl ring-2 ring-blue-600' : 'shadow-lg'}`}>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-baseline gap-1 mt-4">
          <span className="text-4xl font-extrabold tracking-tight">{price}</span>
          <span className="text-sm text-gray-500">{priceDescription}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button size="lg" className={`w-full ${isFeatured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
