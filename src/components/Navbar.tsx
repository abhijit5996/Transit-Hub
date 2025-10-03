import { Link, useLocation } from 'react-router-dom';
import { Train } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Plan Journey', path: '/plan-journey' },
    { name: 'Parking', path: '/parking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-smooth">
            <Train className="w-8 h-8" />
            <span className="text-xl font-bold">TransitHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/plan-journey"
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-smooth shadow-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
