
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl">
    <CardHeader className="flex justify-center items-center mb-4 p-0">
      <div className="bg-blue-100 rounded-full p-4">
        {icon}
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <CardTitle className="text-xl font-semibold mb-2 text-gray-900">{title}</CardTitle>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default FeatureCard;
