import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Train, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plan Journey", path: "/plan-journey" },
    { name: "Parking", path: "/parking" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%]">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
        
        .animate-fade-out-up {
          animation: fadeOutUp 0.3s ease-out forwards;
        }
      `}</style>
      
      <div className="bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:opacity-80 transition"
          >
            <Train className="w-7 h-7 md:w-8 md:h-8" />
            <span className="text-lg md:text-xl font-bold">TransitHub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium px-3 py-1 rounded-full transition hover:bg-accent/30 ${
                  location.pathname === link.path
                    ? "text-primary bg-accent/40"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book Now (Desktop only) */}
          <Link
            to="/plan-journey"
            className="hidden md:block px-5 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition shadow-md"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground hover:text-primary transition"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg p-4 flex flex-col gap-3 animate-fade-in-down md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition hover:bg-accent/30 text-center ${
                  location.pathname === link.path
                    ? "text-primary bg-accent/40"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Book Now for Mobile */}
            <Link
              to="/plan-journey"
              onClick={() => setIsMobileOpen(false)}
              className="px-5 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition shadow-md text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;