import { useEffect, useState } from 'react';
import { ArrowRight, Clock, IndianRupee, MapPin, Navigation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransportOptions from '@/components/TransportOptions';
import RideComparison from '@/components/RideComparison';
import { useJourney } from '@/context/JourneyContext';
import { sampleJourney, rideOptions, RideOption } from '@/utils/data';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PlanJourney = () => {
  const { origin, destination, currentJourney, setCurrentJourney } = useJourney();
  const [selectedRide, setSelectedRide] = useState<RideOption | null>(null);

  useEffect(() => {
    if (origin && destination && !currentJourney) {
      // Simulate journey planning
      setTimeout(() => {
        setCurrentJourney(sampleJourney);
      }, 500);
    }
  }, [origin, destination, currentJourney, setCurrentJourney]);

  const handleSelectRide = (ride: RideOption) => {
    setSelectedRide(ride);
    toast.success(`${ride.name} selected! Proceeding to booking...`);
  };

  if (!origin || !destination) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="mb-6">Plan Your Journey</h1>
            <p className="text-muted-foreground mb-8">
              Please enter your origin and destination from the home page to plan your journey.
            </p>
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-primary text-primary-foreground hover:opacity-90 shadow-primary"
            >
              Go to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Journey Summary */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">From</div>
                  <div className="font-semibold text-lg">{origin}</div>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <div className="flex items-center gap-4">
                <Navigation className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">To</div>
                  <div className="font-semibold text-lg">{destination}</div>
                </div>
              </div>
            </div>

            {currentJourney && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Total Time</div>
                    <div className="font-semibold">{currentJourney.totalTime} minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IndianRupee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Estimated Cost</div>
                    <div className="font-semibold">₹{currentJourney.totalCost}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Journey Steps */}
        {currentJourney && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6">Journey Steps</h2>
            <div className="space-y-4">
              {currentJourney.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-2">{step.mode}</div>
                    <div className="text-muted-foreground mb-3">
                      {step.from} → {step.to}
                    </div>
                    <div className="flex gap-6 text-sm">
                      <span className="text-muted-foreground">
                        Duration: <span className="font-semibold text-foreground">{step.duration} min</span>
                      </span>
                      <span className="text-muted-foreground">
                        Distance: <span className="font-semibold text-foreground">{step.distance} km</span>
                      </span>
                      <span className="text-muted-foreground">
                        Cost: <span className="font-semibold text-primary">₹{step.cost}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Last Mile Options */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Last Mile Transport Options</h2>
          
          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="cards">Card View</TabsTrigger>
              <TabsTrigger value="comparison">Compare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cards">
              <TransportOptions rides={rideOptions} onSelectRide={handleSelectRide} />
            </TabsContent>
            
            <TabsContent value="comparison">
              <RideComparison rides={rideOptions} onSelectRide={handleSelectRide} />
            </TabsContent>
          </Tabs>
        </div>

        {selectedRide && (
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-primary/10 border border-primary rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Booking Confirmed!</h3>
              <p className="text-foreground">
                Your {selectedRide.name} has been booked. Expected arrival in {selectedRide.eta} minutes.
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PlanJourney;
