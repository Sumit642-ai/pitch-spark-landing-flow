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
    className={`text-center p-6 bg-card border shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 rounded-xl h-full ${className || ''}`}
  >
    <CardHeader className="flex justify-center items-center mb-4 p-0">
      <div className="bg-primary/10 rounded-full p-4">
        {icon}
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <CardTitle className="text-xl font-semibold mb-2 text-foreground">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default FeatureCard;
