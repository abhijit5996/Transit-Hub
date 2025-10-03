import { Car, Bike, Bus, Zap } from 'lucide-react';
import { RideOption } from '@/utils/data';
import { Button } from '@/components/ui/button';

interface TransportOptionsProps {
  rides: RideOption[];
  onSelectRide?: (ride: RideOption) => void;
}

const TransportOptions = ({ rides, onSelectRide }: TransportOptionsProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'auto':
        return <Car className="w-6 h-6" />;
      case 'bike':
        return <Bike className="w-6 h-6" />;
      case 'bus':
        return <Bus className="w-6 h-6" />;
      case 'e-rickshaw':
        return <Zap className="w-6 h-6" />;
      default:
        return <Car className="w-6 h-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {rides.map((ride) => (
        <div
          key={ride.id}
          className={`bg-card border border-border rounded-xl p-6 hover:border-primary transition-smooth ${
            !ride.available ? 'opacity-50' : ''
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              {getIcon(ride.type)}
            </div>
            {ride.ecoFriendly && (
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                Eco-friendly
              </span>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-2">{ride.name}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price:</span>
              <span className="font-semibold text-primary">₹{ride.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ETA:</span>
              <span className="font-semibold">{ride.eta} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Distance:</span>
              <span className="font-semibold">{ride.distance} km</span>
            </div>
          </div>

          <Button
            onClick={() => onSelectRide?.(ride)}
            disabled={!ride.available}
            className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-smooth"
          >
            {ride.available ? 'Select Ride' : 'Unavailable'}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TransportOptions;
