import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StickyScrollFeatures from "@/components/StickyScrollFeatures";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-10"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-20">
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
        <section id="features" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
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
        <section id="pricing" className="py-20 sm:py-28 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Choose the plan that's right for you
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Start for free, then upgrade when you're ready to unlock more power.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimateOnScroll animationDelay="200ms">
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
              </AnimateOnScroll>
              <AnimateOnScroll animationDelay="400ms">
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
              </AnimateOnScroll>
              <AnimateOnScroll animationDelay="600ms">
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
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <AnimateOnScroll className="text-center bg-card rounded-2xl p-12 border border-white/10 shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to build your winning pitch?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of startups and founders who trust PitchSpark to create stunning presentations.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold py-3 px-8 text-lg rounded-full transition-transform hover:scale-105">
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card py-8">
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
