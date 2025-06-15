import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, BrainCircuit, LayoutTemplate, Palette } from "lucide-react";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                Create Stunning Pitch Decks in Minutes
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                PitchSpark is an AI-powered platform that helps you craft compelling presentations effortlessly. Turn your ideas into investor-ready pitch decks.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 text-lg rounded-full">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Everything you need to create the perfect pitch
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                From AI-generated content to beautiful design, we've got you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<BrainCircuit className="h-10 w-10 text-blue-600" />}
                title="AI-Powered Content"
                description="Generate persuasive content and talking points for every slide, tailored to your business."
              />
              <FeatureCard
                icon={<LayoutTemplate className="h-10 w-10 text-blue-600" />}
                title="Beautiful Templates"
                description="Choose from a library of professionally designed templates that impress investors."
              />
              <FeatureCard
                icon={<Palette className="h-10 w-10 text-blue-600" />}
                title="Easy Customization"
                description="Effortlessly customize colors, fonts, and layouts to match your brand identity."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-blue-600" />}
                title="Analytics & Tracking"
                description="Track who views your deck, which slides they engage with, and for how long."
              />
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Choose the plan that's right for you
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Start for free, then upgrade when you're ready to unlock more power.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Starter"
                price="$0"
                priceDescription="/month"
                features={[
                  "1 user",
                  "3 pitch decks",
                  "AI content generation",
                  "Standard templates",
                ]}
                buttonText="Get Started"
              />
              <PricingCard
                title="Pro"
                price="$25"
                priceDescription="/month"
                features={[
                  "Up to 5 users",
                  "Unlimited pitch decks",
                  "Advanced AI features",
                  "Premium templates",
                  "Custom branding",
                  "Analytics & tracking"
                ]}
                buttonText="Start Free Trial"
                isFeatured={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                priceDescription=""
                features={[
                  "Unlimited users",
                  "Dedicated support",
                  "Team collaboration features",
                  "Custom integrations",
                  "Advanced security",
                ]}
                buttonText="Contact Sales"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center bg-gray-100 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to build your winning pitch?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of startups and founders who trust PitchSpark to create stunning presentations.
              </p>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 text-lg rounded-full">
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 PitchSpark. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
