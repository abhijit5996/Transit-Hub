import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useJourney } from '@/context/JourneyContext';
import { metroStations } from '@/utils/data';

const JourneyPlanner = () => {
  const navigate = useNavigate();
  const { setOrigin, setDestination, origin, destination } = useJourney();
  const [localOrigin, setLocalOrigin] = useState(origin);
  const [localDestination, setLocalDestination] = useState(destination);

  const handlePlanJourney = () => {
    if (localOrigin && localDestination) {
      setOrigin(localOrigin);
      setDestination(localDestination);
      navigate('/plan-journey');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-card border border-border">
        <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Journey</h2>
        
        <div className="space-y-4">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Enter origin (e.g., Salt Lake Sector V)"
              value={localOrigin}
              onChange={(e) => setLocalOrigin(e.target.value)}
              className="pl-12 h-14 bg-background/50 border-border"
              list="origin-stations"
            />
            <datalist id="origin-stations">
              {metroStations.map((station) => (
                <option key={station.id} value={station.name} />
              ))}
            </datalist>
          </div>

          <div className="relative">
            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Enter destination (e.g., Garia)"
              value={localDestination}
              onChange={(e) => setLocalDestination(e.target.value)}
              className="pl-12 h-14 bg-background/50 border-border"
              list="destination-stations"
            />
            <datalist id="destination-stations">
              {metroStations.map((station) => (
                <option key={station.id} value={station.name} />
              ))}
            </datalist>
          </div>

          <Button
            onClick={handlePlanJourney}
            className="w-full h-14 bg-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-primary text-lg font-semibold"
            disabled={!localOrigin || !localDestination}
          >
            <Search className="w-5 h-5 mr-2" />
            Find Best Route
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Multi-modal</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Real-time</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Eco-friendly options</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyPlanner;
