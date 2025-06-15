
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TiltablePricingCard from "@/components/TiltablePricingCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StickyScrollFeatures from "@/components/StickyScrollFeatures";
import HeroBackground from "@/components/HeroBackground";
import CreativeCTASection from "@/components/CreativeCTASection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <HeroBackground />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AnimateOnScroll animationDelay="200ms">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                  Create Stunning Pitch Decks in Minutes
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll animationDelay="400ms">
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  PitchSpark is an AI-powered platform that helps you craft compelling presentations effortlessly. Turn your ideas into investor-ready pitch decks.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animationDelay="600ms">
                <div>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold py-3 px-8 text-lg rounded-full transition-transform hover:scale-105">
                    Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Everything you need to create the perfect pitch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From AI-generated content to beautiful design, we've got you covered.
              </p>
            </AnimateOnScroll>
            <StickyScrollFeatures />
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Choose the plan that's right for you
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Start for free, then upgrade when you're ready to unlock more power.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll animationDelay="200ms">
                <TiltablePricingCard
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
              </AnimateOnScroll>
              <AnimateOnScroll animationDelay="400ms">
                <TiltablePricingCard
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
              </AnimateOnScroll>
              <AnimateOnScroll animationDelay="600ms">
                <TiltablePricingCard
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
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* About Section - Now at the end */}
        <AboutSection />
        
        {/* CTA Section */}
        <CreativeCTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 PitchSpark. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
