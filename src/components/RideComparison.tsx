import { Check, X, Leaf } from 'lucide-react';
import { RideOption } from '@/utils/data';
import { Button } from '@/components/ui/button';

interface RideComparisonProps {
  rides: RideOption[];
  onSelectRide?: (ride: RideOption) => void;
}

const RideComparison = ({ rides, onSelectRide }: RideComparisonProps) => {
  const sortedByPrice = [...rides].sort((a, b) => a.price - b.price);
  const sortedByTime = [...rides].sort((a, b) => a.eta - b.eta);
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left p-4 font-semibold">Transport</th>
            <th className="text-left p-4 font-semibold">Price</th>
            <th className="text-left p-4 font-semibold">ETA</th>
            <th className="text-left p-4 font-semibold">Distance</th>
            <th className="text-left p-4 font-semibold">Eco-friendly</th>
            <th className="text-left p-4 font-semibold">Status</th>
            <th className="text-left p-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride) => {
            const isCheapest = ride.id === sortedByPrice[0].id;
            const isFastest = ride.id === sortedByTime[0].id;
            
            return (
              <tr
                key={ride.id}
                className={`border-b border-border hover:bg-card/50 transition-smooth ${
                  !ride.available ? 'opacity-50' : ''
                }`}
              >
                <td className="p-4">
                  <div>
                    <div className="font-medium">{ride.name}</div>
                    <div className="text-xs text-muted-foreground capitalize">{ride.type}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${isCheapest ? 'text-primary' : ''}`}>
                      ₹{ride.price}
                    </span>
                    {isCheapest && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Cheapest
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${isFastest ? 'text-primary' : ''}`}>
                      {ride.eta} min
                    </span>
                    {isFastest && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Fastest
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">{ride.distance} km</td>
                <td className="p-4">
                  {ride.ecoFriendly ? (
                    <span className="flex items-center gap-1 text-green-400">
                      <Leaf className="w-4 h-4" />
                      <Check className="w-4 h-4" />
                    </span>
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground" />
                  )}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      ride.available
                        ? 'bg-green-400/20 text-green-400'
                        : 'bg-red-400/20 text-red-400'
                    }`}
                  >
                    {ride.available ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="p-4">
                  <Button
                    onClick={() => onSelectRide?.(ride)}
                    disabled={!ride.available}
                    size="sm"
                    className="bg-primary text-primary-foreground hover:opacity-90"
                  >
                    Book
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RideComparison;
