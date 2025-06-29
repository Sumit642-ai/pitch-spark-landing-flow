
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <Card 
    className={`text-center p-8 bg-card border shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 rounded-xl h-80 ${className || ''}`}
  >
    <CardHeader className="flex justify-center items-center mb-6 p-0">
      <div className="bg-primary/10 rounded-full p-6">
        {icon}
      </div>
    </CardHeader>
    <CardContent className="p-0 flex flex-col justify-between h-full">
      <div>
        <CardTitle className="text-2xl font-semibold mb-4 text-foreground">{title}</CardTitle>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      </div>
    </CardContent>
  </Card>
);

export default FeatureCard;
