import { Link } from 'react-router-dom';
import { Home as HomeIcon, Gift, Zap, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JourneyPlanner from '@/components/JourneyPlanner';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-taxi.jpg';

const Home = () => {
  const benefits = [
    {
      icon: HomeIcon,
      title: 'HOME PICKUP',
      description: 'We run door-to-door pickup to serve you better and add to your convenience',
    },
    {
      icon: Gift,
      title: 'BONUSES FOR RIDE',
      description: 'When you book us frequently we give you different bonuses that can put a smile on your face',
    },
    {
      icon: Zap,
      title: 'FAST BOOKING',
      description: 'Our booking method is very fast and easy. It won\'t stress you.',
    },
    {
      icon: MapPin,
      title: 'GPS SEARCHING',
      description: 'We run GPS searching in case you aren\'t sure of your destination. So you don\'t have to worry.',
    },
  ];

  const subscriptions = [
    {
      title: 'WITHIN THE CITY',
      description: 'We run services within the city to any destination you want',
      color: 'primary',
    },
    {
      title: 'WITHIN THE STATE',
      description: 'We run services within the state to any destination you want',
      color: 'secondary',
    },
    {
      title: 'WITHIN THE COUNTRY',
      description: 'We run services within the country to any destination you want',
      color: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-foreground">
                Need a<br />
                <span className="text-primary">Ride</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Your integrated last-mile transit solution. Plan seamless journeys from metro to doorstep.
              </p>
              <div className="flex gap-4">
                <Link to="/plan-journey">
                  <Button className="bg-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-primary px-8 py-6 text-lg">
                    Book now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-6 text-lg border-border hover:bg-secondary">
                    Call
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Journey Planner */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <JourneyPlanner />
        </div>
      </section>

      {/* Subscriptions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">OUR SUBSCRIPTIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptions.map((sub, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-card border ${
                  sub.color === 'primary'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary border-border'
                }`}
              >
                <h3 className="text-xl font-bold mb-4">{sub.title}</h3>
                <p className={`mb-6 ${sub.color === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {sub.description}
                </p>
                <Button
                  variant={sub.color === 'primary' ? 'secondary' : 'default'}
                  className="w-full"
                >
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary-foreground">SOME BENEFITS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-foreground">{benefit.title}</h3>
                  <p className="text-primary-foreground/80">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-muted-foreground mb-6">
            If you have any question or problem feel free<br />to call us on our toll free line
          </p>
          <h2 className="text-primary mb-8">+23480 1000 000</h2>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:opacity-90 shadow-primary px-12 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
