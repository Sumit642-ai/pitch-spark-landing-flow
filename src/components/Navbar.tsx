import { Presentation, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Presentation className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-foreground">PitchSpark</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Pricing
            </a>
            <a href="#templates" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Templates
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-primary">
              Log In
            </Button>
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
              Sign Up Free
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
