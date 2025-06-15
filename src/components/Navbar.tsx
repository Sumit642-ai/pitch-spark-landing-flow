
import { Presentation, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5 fixed w-full top-0 z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -top-2 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-2 right-10 w-12 h-12 bg-primary/8 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand with enhanced styling */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Presentation className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <Sparkles className="h-3 w-3 text-primary/60 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent hover:from-primary hover:via-foreground hover:to-primary transition-all duration-500">
              PitchSpark
            </h1>
          </div>

          {/* Navigation Links with creative hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="relative text-muted-foreground hover:text-primary font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -m-2"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a 
              href="#pricing" 
              className="relative text-muted-foreground hover:text-primary font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Pricing</span>
              <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -m-2"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a 
              href="#templates" 
              className="relative text-muted-foreground hover:text-primary font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Templates</span>
              <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -m-2"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>

          {/* Right side actions with enhanced styling */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Log In
            </Button>
            <Button 
              className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              Sign Up Free
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
