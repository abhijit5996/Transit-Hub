import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '50K+' },
    { icon: TrendingUp, label: 'Daily Rides', value: '10K+' },
    { icon: Award, label: 'Years of Service', value: '5+' },
    { icon: Target, label: 'Cities Covered', value: '12' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-6">About TransitHub</h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing urban commuting with integrated last-mile connectivity
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TransitHub was created to solve the persistent last-mile connectivity challenge faced by metro commuters. 
              We believe that seamless urban mobility shouldn't end at the metro station. Our platform integrates 
              multiple transportation options to ensure you reach your final destination efficiently, affordably, 
              and sustainably.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-smooth"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Integrated Journey Planning</h3>
                <p className="text-muted-foreground">
                  Plan your entire journey from home to destination, including first-mile access to metro, 
                  metro travel, and last-mile connectivity—all in one place.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Real-Time Transport Options</h3>
                <p className="text-muted-foreground">
                  Access live information on autos, e-rickshaws, bike rentals, and feeder buses available 
                  near metro stations, with transparent pricing and ETA.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Smart Parking Solutions</h3>
                <p className="text-muted-foreground">
                  Check real-time parking availability at metro stations before you leave, saving time 
                  and reducing congestion.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly Choices</h3>
                <p className="text-muted-foreground">
                  We highlight sustainable transport options like e-rickshaws and bike rentals, helping 
                  you make environmentally conscious decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-primary/10 border border-primary rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Making urban mobility accessible to everyone
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Promoting eco-friendly transport options
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging technology for better commutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
